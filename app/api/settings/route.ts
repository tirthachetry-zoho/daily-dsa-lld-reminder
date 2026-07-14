import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
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
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
        email: true,
        reminderTime: true,
        timezone: true,
        frequencyDays: true,
        systemDesignFrequency: true,
        isActive: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
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
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const settings = settingsSchema.parse(body);

    const user = await prisma.user.update({
      where: { id: session.user.id },
      data: {
        reminderTime: settings.reminderTime,
        timezone: settings.timezone,
        frequencyDays: settings.frequencyDays,
        systemDesignFrequency: settings.systemDesignFrequency,
        ...(settings.isActive !== undefined && { isActive: settings.isActive }),
      },
    });

    return NextResponse.json(user);
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
