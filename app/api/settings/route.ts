import { NextResponse } from "next/server";
import { userRepository } from "@/repositories/user-repository";
import { resolveUser } from "@/lib/email-access";
import { z } from "zod";

const settingsSchema = z.object({
  reminderTime: z.string().regex(/^\d{2}:\d{2}$/),
  timezone: z.string(),
  frequencyDays: z.number().min(1).max(30),
  systemDesignFrequency: z.number().min(1).max(30),
  isActive: z.boolean().optional(),
});

export async function GET(request: Request) {
  try {
    const resolved = await resolveUser();
    if (!resolved?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const user = resolved.user;

    return NextResponse.json({
      email: user.email,
      reminderTime: user.reminder_time,
      timezone: user.timezone,
      frequencyDays: user.frequency_days,
      systemDesignFrequency: user.system_design_frequency,
      isActive: user.is_active,
    });
  } catch (error) {
    console.error("Settings fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const resolved = await resolveUser();
    if (!resolved?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const settings = settingsSchema.parse(body);

    const user = await userRepository.update(resolved.user.id, {
      reminder_time: settings.reminderTime,
      timezone: settings.timezone,
      frequency_days: settings.frequencyDays,
      system_design_frequency: settings.systemDesignFrequency,
      ...(settings.isActive !== undefined && { is_active: settings.isActive }),
    });

    return NextResponse.json({
      email: user.email,
      reminderTime: user.reminder_time,
      timezone: user.timezone,
      frequencyDays: user.frequency_days,
      systemDesignFrequency: user.system_design_frequency,
      isActive: user.is_active,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input" },
        { status: 400 }
      );
    }

    console.error("Settings update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
