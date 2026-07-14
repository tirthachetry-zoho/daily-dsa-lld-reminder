import { userRepository } from "@/repositories/user-repository";
import { problemRepository } from "@/repositories/problem-repository";
import { sentProblemRepository } from "@/repositories/sent-problem-repository";
import { emailService } from "@/services/email-service";
import { toZonedTime } from "date-fns-tz";

export class ReminderService {
  async processReminders(): Promise<{
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

    const users = await userRepository.findActiveUsers();

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

        const systemDesignProblem = await this.shouldSendSystemDesign(user.id)
          ? await this.getNextSystemDesignProblem(user.id)
          : null;

        await emailService.sendReminderEmail(
          user.email,
          dsaProblem,
          systemDesignProblem
        );

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

  private async shouldSendReminder(user: any): Promise<boolean> {
    const now = new Date();
    const userTime = toZonedTime(now, user.timezone);
    const [hours, minutes] = user.reminderTime.split(":").map(Number);
    const userHour = userTime.getHours();
    const userMinute = userTime.getMinutes();

    // Check if it's the user's reminder time (within the same hour)
    if (userHour !== hours) {
      return false;
    }

    // Check if already sent today
    const alreadySentToday = await sentProblemRepository.findByUserToday(user.id);
    return !alreadySentToday;
  }

  private async shouldSendSystemDesign(userId: string): Promise<boolean> {
    const user = await userRepository.findById(userId);
    if (!user) return false;

    const lastSystemDesign = await sentProblemRepository.findByUser(
      userId,
      1
    );

    if (!lastSystemDesign || lastSystemDesign.length === 0) {
      return true;
    }

    const lastSent = lastSystemDesign[0];
    if (lastSent.problem.type !== "SYSTEM_DESIGN") {
      return true;
    }

    const daysSinceLast = this.daysBetween(lastSent.sentAt, new Date());
    return daysSinceLast >= user.systemDesignFrequency;
  }

  private async getNextDSAProblem(userId: string) {
    let problem = await problemRepository.findRandomUnseenByUser(userId, "DSA");

    // If all problems have been sent, reset and pick a random one
    if (!problem) {
      problem = await problemRepository.findRandomByType("DSA");
    }

    return problem;
  }

  private async getNextSystemDesignProblem(userId: string) {
    let problem = await problemRepository.findRandomUnseenByUser(
      userId,
      "SYSTEM_DESIGN"
    );

    // If all problems have been sent, reset and pick a random one
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
