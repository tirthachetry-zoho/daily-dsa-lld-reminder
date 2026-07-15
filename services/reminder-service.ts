import { userRepository, UserRow } from "@/repositories/user-repository";
import { problemRepository, ProblemRow } from "@/repositories/problem-repository";
import { sentProblemRepository } from "@/repositories/sent-problem-repository";
import { emailService, BrevoError, EmailConfigError } from "@/services/email-service";

export class ReminderService {
  async processReminders(userId?: string): Promise<{
    processed: number;
    sent: number;
    skipped: number;
    errors: number;
    errorDetails: string[];
  }> {
    const results = {
      processed: 0,
      sent: 0,
      skipped: 0,
      errors: 0,
      errorDetails: [] as string[],
    };

    const users: UserRow[] = userId
      ? [await userRepository.findById(userId)].filter(Boolean) as UserRow[]
      : await userRepository.findActiveUsers();

    for (const user of users) {
      results.processed++;

      try {
        const shouldSend = await this.shouldSendReminder(user);

        if (!shouldSend) {
          results.skipped++;
          continue;
        }

        const dsaProblem = await this.getNextDSAProblem(user.id);
        if (!dsaProblem) {
          results.errors++;
          continue;
        }

        const systemDesignProblem = (await this.shouldSendSystemDesign(user.id))
          ? await this.getNextSystemDesignProblem(user.id)
          : null;

        try {
          await emailService.sendReminderEmailWithRetry(
            user.email,
            dsaProblem,
            systemDesignProblem
          );
        } catch (emailError) {
          // Decide whether to permanently deactivate the user.
          // Only deactivate on a genuine, permanent recipient bounce from
          // Brevo (e.g. 400 "invalid recipient" / 4xx hard-bounce). For
          // config errors (missing BREVO_API_KEY/EMAIL_FROM) or transient
          // 5xx failures, we must NOT deactivate — otherwise a single
          // misconfiguration would silently disable every user forever.
          const isPermanentBounce =
            emailError instanceof BrevoError &&
            emailError.status >= 400 &&
            emailError.status < 500 &&
            !/quota|limit|unauthorized|forbidden|api key|sender/i.test(
              emailError.body
            );

          if (isPermanentBounce) {
            console.error(
              `Permanently failed to email ${user.email} (invalid recipient). Marking inactive.`,
              emailError
            );
            try {
              await userRepository.update(user.id, { is_active: false });
            } catch (updateErr) {
              console.error(`Failed to deactivate user ${user.email}:`, updateErr);
            }
          } else if (emailError instanceof EmailConfigError) {
            // Config problem — log loudly but do not deactivate or retry
            // pointlessly for other users; surface it so it gets fixed.
            console.error(
              `Email config error while emailing ${user.email}: ${emailError.message}`
            );
          } else {
            console.error(
              `Transient/unknown email failure for ${user.email} (not deactivating):`,
              emailError
            );
          }
          results.errors++;
          results.errorDetails.push(
            `${user.email}: ${emailError instanceof Error ? emailError.message : String(emailError)}`
          );
          continue;
        }

        await sentProblemRepository.create({
          userId: user.id,
          problemId: dsaProblem.id,
        });

        if (systemDesignProblem) {
          await sentProblemRepository.create({
            userId: user.id,
            problemId: systemDesignProblem.id,
          });
        }

        results.sent++;
      } catch (error) {
        console.error(`Error processing user ${user.email}:`, error);
        results.errors++;
        results.errorDetails.push(
          `${user.email}: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    }

    return results;
  }

  private async shouldSendReminder(user: UserRow): Promise<boolean> {
    // When triggered by pg_cron for a specific user at their reminder time,
    // we just need to ensure we haven't already sent today.
    const alreadySentToday = await sentProblemRepository.findByUserToday(user.id);
    return !alreadySentToday;
  }

  private async shouldSendSystemDesign(userId: string): Promise<boolean> {
    const user = await userRepository.findById(userId);
    if (!user) return false;

    const lastSent = await sentProblemRepository.findByUser(userId, 1);

    if (!lastSent || lastSent.length === 0) {
      return true;
    }

    const last = lastSent[0];
    if (last.problem?.type !== "SYSTEM_DESIGN") {
      return true;
    }

    const daysSinceLast = this.daysBetween(new Date(last.sent_at), new Date());
    return daysSinceLast >= user.system_design_frequency;
  }

  private async getNextDSAProblem(userId: string): Promise<ProblemRow | null> {
    let problem = await problemRepository.findRandomUnseenByUser(userId, "DSA");

    if (!problem) {
      problem = await problemRepository.findRandomByType("DSA");
    }

    return problem;
  }

  private async getNextSystemDesignProblem(
    userId: string
  ): Promise<ProblemRow | null> {
    let problem = await problemRepository.findRandomUnseenByUser(
      userId,
      "SYSTEM_DESIGN"
    );

    if (!problem) {
      problem = await problemRepository.findRandomByType("SYSTEM_DESIGN");
    }

    return problem;
  }

  private daysBetween(date1: Date, date2: Date): number {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.floor((date2.getTime() - date1.getTime()) / oneDay);
  }
}

export const reminderService = new ReminderService();