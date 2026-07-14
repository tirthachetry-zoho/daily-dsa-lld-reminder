import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";
import { format, toZonedTime } from "date-fns-tz";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Verify the request is from GitHub Actions / Vercel cron (optional security check)
    const authHeader = request.headers.get("authorization");
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const now = new Date();

    // Get all active users
    const users = await prisma.user.findMany({
      where: { isActive: true },
    });

    console.log(`Processing ${users.length} active users`);

    const results = {
      processed: 0,
      sent: 0,
      skipped: 0,
      errors: 0,
    };

    for (const user of users) {
      results.processed++;

      try {
        // On Vercel Hobby the cron runs once per day, so we send to every
        // active user whose reminder is due today (guarded by "already sent
        // today" below). The per-user reminderTime is still stored for
        // reference / local hourly runs via `npm run send-reminders`.
        console.log(`Processing user ${user.email}`);

        // Check if already sent today
        const todayStart = new Date(now);
        todayStart.setHours(0, 0, 0, 0);
        const todayEnd = new Date(now);
        todayEnd.setHours(23, 59, 59, 999);

        const alreadySentToday = await prisma.sentProblem.findFirst({
          where: {
            userId: user.id,
            sentAt: {
              gte: todayStart,
              lte: todayEnd,
            },
          },
        });

        if (alreadySentToday) {
          console.log(`Skipping ${user.email} - already sent today`);
          results.skipped++;
          continue;
        }

        // Get next unseen DSA problem (random selection)
        const sentProblemIds = await prisma.sentProblem
          .findMany({
            where: { userId: user.id },
            select: { problemId: true },
          })
          .then((sent) => sent.map((s) => s.problemId));

        const unseenDsaIds = await prisma.problem
          .findMany({
            where: {
              type: "DSA",
              id: { notIn: sentProblemIds.length > 0 ? sentProblemIds : undefined },
            },
            select: { id: true },
          })
          .then((rows) => rows.map((r) => r.id));

        const pickRandomId = (ids: string[]): string | null =>
          ids.length > 0 ? ids[Math.floor(Math.random() * ids.length)] : null;

        const dsaProblemId =
          pickRandomId(unseenDsaIds) ||
          (await prisma.problem
            .findMany({ where: { type: "DSA" }, select: { id: true } })
            .then((rows) => pickRandomId(rows.map((r) => r.id))));

        const finalDsaProblem = dsaProblemId
          ? await prisma.problem.findUnique({ where: { id: dsaProblemId } })
          : null;

        if (!finalDsaProblem) {
          console.log(`No DSA problems available for ${user.email}`);
          results.errors++;
          continue;
        }

        // Check if System Design problem should be included
        let systemDesignProblem = null;
        const userSentProblems = await prisma.sentProblem.findMany({
          where: {
            userId: user.id,
            problem: { type: "SYSTEM_DESIGN" },
          },
          orderBy: { sentAt: "desc" },
          take: 1,
        });

        const shouldSendSystemDesign =
          userSentProblems.length === 0 ||
          daysBetween(userSentProblems[0].sentAt, now) >= user.systemDesignFrequency;

        if (shouldSendSystemDesign) {
          const sentSystemDesignIds = await prisma.sentProblem
            .findMany({
              where: {
                userId: user.id,
                problem: { type: "SYSTEM_DESIGN" },
              },
              select: { problemId: true },
            })
            .then((sent) => sent.map((s) => s.problemId));

          const unseenSdIds = await prisma.problem
            .findMany({
              where: {
                type: "SYSTEM_DESIGN",
                id: { notIn: sentSystemDesignIds.length > 0 ? sentSystemDesignIds : undefined },
              },
              select: { id: true },
            })
            .then((rows) => rows.map((r) => r.id));

          const sdProblemId =
            pickRandomId(unseenSdIds) ||
            (await prisma.problem
              .findMany({ where: { type: "SYSTEM_DESIGN" }, select: { id: true } })
              .then((rows) => pickRandomId(rows.map((r) => r.id))));

          systemDesignProblem = sdProblemId
            ? await prisma.problem.findUnique({ where: { id: sdProblemId } })
            : null;
        }

        // Send email
        const emailHtml = generateEmailHtml(finalDsaProblem, systemDesignProblem);

        await resend.emails.send({
          from: process.env.EMAIL_FROM || "noreply@dsareminder.com",
          to: user.email,
          subject: `🚀 Daily Coding Reminder - ${finalDsaProblem.title}`,
          html: emailHtml,
        });

        // Save DSA problem as sent
        await prisma.sentProblem.create({
          data: {
            userId: user.id,
            problemId: finalDsaProblem.id,
          },
        });

        // Save System Design problem as sent if included
        if (systemDesignProblem) {
          await prisma.sentProblem.create({
            data: {
              userId: user.id,
              problemId: systemDesignProblem.id,
            },
          });
        }

        console.log(`Successfully sent reminder to ${user.email}`);
        results.sent++;
      } catch (error) {
        console.error(`Error processing user ${user.email}:`, error);
        results.errors++;
      }
    }

    return NextResponse.json({
      message: "Reminder processing completed",
      results,
    });
  } catch (error) {
    console.error("Send reminders error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function daysBetween(date1: Date, date2: Date): number {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.floor((date2.getTime() - date1.getTime()) / oneDay);
}

function generateEmailHtml(
  dsaProblem: any,
  systemDesignProblem: any | null
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
          <span style="background: ${difficultyColors[dsaProblem.difficulty as keyof typeof difficultyColors]}; color: ${difficultyTextColors[dsaProblem.difficulty as keyof typeof difficultyTextColors]}; padding: 5px 15px; border-radius: 20px; font-size: 14px; font-weight: bold;">
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
          ${dsaProblem.leetcodeUrl ? `<a href="${dsaProblem.leetcodeUrl}" style="display: inline-block; background: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; margin-right: 10px;">Solve on LeetCode</a>` : ''}
          ${dsaProblem.solutionUrl ? `<a href="${dsaProblem.solutionUrl}" style="display: inline-block; background: #e5e7eb; color: #1f2937; padding: 10px 20px; text-decoration: none; border-radius: 6px; margin-right: 10px;">View Solution</a>` : ''}
          ${dsaProblem.youtubeUrl ? `<a href="${dsaProblem.youtubeUrl}" style="display: inline-block; background: #dc2626; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px;">Watch YouTube</a>` : ''}
        </div>
      </div>

      ${systemDesignProblem ? `
      <div style="background: #faf5ff; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h2 style="font-size: 20px; color: #7c3aed; margin-top: 0;">🏗 System Design</h2>
        <h3 style="font-size: 24px; color: #5b21b6; margin: 15px 0;">${systemDesignProblem.title}</h3>
        <p style="color: #666;">${systemDesignProblem.description || ""}</p>
        
        <div style="margin-top: 20px;">
          ${systemDesignProblem.primaryUrl ? `<a href="${systemDesignProblem.primaryUrl}" style="display: inline-block; background: #7c3aed; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; margin-right: 10px;">View Reference</a>` : ''}
          ${systemDesignProblem.youtubeUrl ? `<a href="${systemDesignProblem.youtubeUrl}" style="display: inline-block; background: #dc2626; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px;">Watch Video</a>` : ''}
        </div>
      </div>
      ` : ''}

      <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #666;">Happy Coding! 🎉</p>
        <p style="font-size: 12px; color: #999; margin-top: 10px;">You received this email because you subscribed to DSA Reminder.</p>
      </div>
    </body>
    </html>
  `;
}