import { ProblemRow } from "@/repositories/problem-repository";

const BREVO_API_KEY = process.env.BREVO_API_KEY;

export class EmailService {
  async sendReminderEmail(
    to: string,
    dsaProblem: ProblemRow,
    systemDesignProblem: ProblemRow | null
  ): Promise<void> {
    const emailHtml = this.generateEmailHtml(to, dsaProblem, systemDesignProblem);

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY || "",
      },
      body: JSON.stringify({
        sender: {
          email: process.env.EMAIL_FROM || "noreply@dsareminder.com",
        },
        to: [{ email: to }],
        subject: `🚀 Daily Coding Reminder - ${dsaProblem.title}`,
        htmlContent: emailHtml,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Brevo API error: ${response.status} - ${error}`);
    }
  }

  /**
   * Sends the reminder email with retries. Throws if it still fails after
   * `maxRetries` attempts so the caller can mark the recipient as inactive.
   */
  async sendReminderEmailWithRetry(
    to: string,
    dsaProblem: ProblemRow,
    systemDesignProblem: ProblemRow | null,
    maxRetries = 3
  ): Promise<void> {
    let lastError: unknown;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        await this.sendReminderEmail(to, dsaProblem, systemDesignProblem);
        return;
      } catch (error) {
        lastError = error;
        console.error(
          `Email send attempt ${attempt}/${maxRetries} failed for ${to}:`,
          error
        );
        if (attempt < maxRetries) {
          // Exponential backoff: 1s, 2s, ...
          await new Promise((r) => setTimeout(r, 1000 * attempt));
        }
      }
    }
    throw lastError instanceof Error
      ? lastError
      : new Error(`Failed to send email to ${to} after ${maxRetries} retries`);
  }

  private generateEmailHtml(
    to: string,
    dsaProblem: ProblemRow,
    systemDesignProblem: ProblemRow | null
  ): string {
    const difficultyColors = {
      EASY: "#dcfce7",
      MEDIUM: "#fef9c3",
      HARD: "#fee2e2",
    };

    const difficultyTextColors = {
      EASY: "#166534",
      MEDIUM: "#854d0e",
      HARD: "#991b1b",
    };

    const unsubscribeUrl = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/unsubscribe?email=${encodeURIComponent(to)}`;
    const year = 2026;
    const authorName = "Tirtha";
    const authorLinkedIn = "https://www.linkedin.com/in/tirthachetry/";
    const privacyUrl = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/privacy`;
    const termsUrl = `${process.env.NEXTAUTH_URL || "http://localhost:3000"}/terms`;

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Daily Coding Reminder</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="font-size: 32px; color: #2563eb; margin: 0;">🚀 Daily Coding Reminder</h1>
          <p style="color: #666; margin-top: 10px;">Keep your coding skills sharp!</p>
        </div>

        <div style="background: #eff6ff; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h2 style="font-size: 20px; color: #1e40af; margin-top: 0;">Today's DSA Problem</h2>
          <h3 style="font-size: 24px; color: #1e3a8a; margin: 15px 0;">${dsaProblem.title}</h3>
          
          <div style="margin: 15px 0;">
            <span style="background: ${difficultyColors[dsaProblem.difficulty]}; color: ${difficultyTextColors[dsaProblem.difficulty]}; padding: 5px 15px; border-radius: 20px; font-size: 14px; font-weight: bold;">
              ${dsaProblem.difficulty}
            </span>
            <span style="color: #666; margin-left: 10px;">${dsaProblem.topic}</span>
          </div>

          ${dsaProblem.companies && dsaProblem.companies.length > 0 ? `
          <div style="margin: 15px 0;">
            <p style="font-size: 14px; color: #666; margin-bottom: 8px;">Companies asking this:</p>
            ${dsaProblem.companies.map((c: string) => `<span style="background: #f3f4f6; padding: 4px 10px; border-radius: 4px; font-size: 12px; margin-right: 5px; display: inline-block;">${c}</span>`).join('')}
          </div>
          ` : ''}

          <div style="margin-top: 20px;">
            ${dsaProblem.leetcode_url ? `<a href="${dsaProblem.leetcode_url}" style="display: inline-block; background: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; margin-right: 10px;">Solve on LeetCode</a>` : ''}
            ${dsaProblem.solution_url ? `<a href="${dsaProblem.solution_url}" style="display: inline-block; background: #e5e7eb; color: #1f2937; padding: 10px 20px; text-decoration: none; border-radius: 6px; margin-right: 10px;">View Solution</a>` : ''}
            ${dsaProblem.youtube_url ? `<a href="${dsaProblem.youtube_url}" style="display: inline-block; background: #dc2626; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px;">Watch YouTube</a>` : ''}
          </div>
        </div>

        ${systemDesignProblem ? `
        <div style="background: #faf5ff; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h2 style="font-size: 20px; color: #7c3aed; margin-top: 0;">🏗 System Design</h2>
          <h3 style="font-size: 24px; color: #5b21b6; margin: 15px 0;">${systemDesignProblem.title}</h3>
          <p style="color: #666;">${systemDesignProblem.description || ""}</p>
          
          <div style="margin-top: 20px;">
            ${systemDesignProblem.primary_url ? `<a href="${systemDesignProblem.primary_url}" style="display: inline-block; background: #7c3aed; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; margin-right: 10px;">View Reference</a>` : ''}
            ${systemDesignProblem.youtube_url ? `<a href="${systemDesignProblem.youtube_url}" style="display: inline-block; background: #dc2626; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px;">Watch Video</a>` : ''}
          </div>
        </div>
        ` : ''}

        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #666;">Happy Coding! 🎉</p>
          <p style="font-size: 12px; color: #999; margin-top: 10px;">You received this email because you subscribed to DSA Reminder.</p>
          <p style="font-size: 12px; color: #999; margin-top: 8px;">
            <a href="${unsubscribeUrl}" style="color: #2563eb; text-decoration: underline;">Unsubscribe</a>
            &nbsp;·&nbsp;
            <a href="${privacyUrl}" style="color: #2563eb; text-decoration: underline;">Privacy Policy</a>
            &nbsp;·&nbsp;
            <a href="${termsUrl}" style="color: #2563eb; text-decoration: underline;">Terms of Service</a>
          </p>
          <p style="font-size: 12px; color: #999; margin-top: 10px;">
            © ${year} DSA Reminder · Built by
            <a href="${authorLinkedIn}" style="color: #2563eb; text-decoration: underline;">${authorName}</a>
          </p>
        </div>
      </body>
      </html>
    `;
  }
}

export const emailService = new EmailService();