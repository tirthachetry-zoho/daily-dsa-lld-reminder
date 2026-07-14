import { NextResponse } from "next/server";
import { verifyEmailDomain, isValidEmailFormat } from "@/lib/email-validation";
import { rateLimit, clientKey, cacheGet, cacheSet } from "@/lib/rate-limit";

const VERIFY_LIMIT = 20; // per window per IP
const VERIFY_WINDOW_MS = 60_000;
const CACHE_TTL_MS = 5 * 60_000; // 5 min cache for domain verification

export async function POST(request: Request) {
  const rl = rateLimit(clientKey(request, "verify-email"), VERIFY_LIMIT, VERIFY_WINDOW_MS);
  if (!rl.allowed) {
    return NextResponse.json(
      { valid: false, reason: "Too many requests, please slow down" },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
    );
  }

  try {
    const body = await request.json();
    const email: string = (body.email ?? "").trim().toLowerCase();

    if (!isValidEmailFormat(email)) {
      return NextResponse.json(
        { valid: false, reason: "Invalid email format" },
        { status: 200 }
      );
    }

    const cacheKey = `verify:${email}`;
    const cached = cacheGet<{ valid: boolean; reason?: string }>(cacheKey);
    if (cached) {
      return NextResponse.json(cached, { status: 200 });
    }

    const result = await verifyEmailDomain(email);
    cacheSet(cacheKey, result, CACHE_TTL_MS);
    return NextResponse.json(result, { status: 200 });
  } catch {
    return NextResponse.json(
      { valid: false, reason: "Could not verify the email" },
      { status: 200 }
    );
  }
}
