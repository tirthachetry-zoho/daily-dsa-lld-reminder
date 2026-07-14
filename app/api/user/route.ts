import { NextResponse } from "next/server";
import { userRepository } from "@/repositories/user-repository";
import { isValidEmailFormat } from "@/lib/email-validation";
import { rateLimit, clientKey, cacheGet, cacheSet } from "@/lib/rate-limit";

const LOOKUP_LIMIT = 30; // per window per IP
const LOOKUP_WINDOW_MS = 60_000;
const CACHE_TTL_MS = 30_000; // 30s cache for lookups

export async function POST(request: Request) {
  // Rate limit lookups to prevent abuse / enumeration scanning.
  const rl = rateLimit(clientKey(request, "user-lookup"), LOOKUP_LIMIT, LOOKUP_WINDOW_MS);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many requests, please slow down" },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
    );
  }

  try {
    const body = await request.json();
    const email: string = (body.email ?? "").trim().toLowerCase();

    if (!isValidEmailFormat(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const cacheKey = `user:${email}`;
    let user = cacheGet<ReturnType<typeof userRepository.findByEmail> extends Promise<infer T> ? T : never>(cacheKey);

    if (!user) {
      user = await userRepository.findByEmail(email);
      cacheSet(cacheKey, user, CACHE_TTL_MS);
    }

    if (!user) {
      return NextResponse.json({ registered: false }, { status: 200 });
    }

    return NextResponse.json(
      {
        registered: true,
        config: {
          email: user.email,
          reminderTime: user.reminder_time,
          timezone: user.timezone,
          frequencyDays: user.frequency_days,
          systemDesignFrequency: user.system_design_frequency,
          isActive: user.is_active,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("User lookup error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const rl = rateLimit(clientKey(request, "user-unregister"), 10, LOOKUP_WINDOW_MS);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many requests, please slow down" },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
    );
  }

  try {
    const body = await request.json();
    const email: string = (body.email ?? "").trim().toLowerCase();

    if (!isValidEmailFormat(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const user = await userRepository.findByEmail(email);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await userRepository.delete(user.id);
    // Invalidate cache entry.
    cacheSet(`user:${email}`, null, CACHE_TTL_MS);

    return NextResponse.json({ message: "Unregistered successfully" }, { status: 200 });
  } catch (error) {
    console.error("Unregister error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}