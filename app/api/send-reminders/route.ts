import { NextResponse } from "next/server";
import { reminderService } from "@/services/reminder-service";

export async function POST(request: Request) {
  try {
    // Verify the request is from pg_cron / GitHub Actions / Vercel (optional security check)
    const authHeader = request.headers.get("authorization");
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Optional: a specific user id (used when triggered per-user by pg_cron)
    let userId: string | undefined;
    try {
      const body = await request.json();
      if (body && body.userId) userId = body.userId;
    } catch {
      // No body / not JSON — process all users
    }

    const results = await reminderService.processReminders(userId);

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