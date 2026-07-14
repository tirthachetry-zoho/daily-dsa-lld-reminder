import { userRepository, UserRow } from "@/repositories/user-repository";
import { problemRepository, ProblemRow } from "@/repositories/problem-repository";
import { sentProblemRepository } from "@/repositories/sent-problem-repository";
import { emailService } from "@/services/email-service";

export class ReminderService {
  async processReminders(userId?: string): Promise<{
    processed: number;
    sent: number;
    skipped: number;
    errors: number;
  }> {
    const results = {
      processed: 0,
      sent: 0,
      skipped: 0,
      errors: 0,
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
          // After retries, the address is likely invalid/bouncing.
          // Mark the user inactive so we stop trying to email them.
          console.error(
            `Permanently failed to email ${user.email} after retries. Marking inactive.`,
            emailError
          );
          try {
            await userRepository.update(user.id, { is_active: false });
          } catch (updateErr) {
            console.error(`Failed to deactivate user ${user.email}:`, updateErr);
          }
          results.errors++;
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