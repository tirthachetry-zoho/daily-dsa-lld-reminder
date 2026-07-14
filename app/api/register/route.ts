import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { userRepository } from "@/repositories/user-repository";
import { verifyEmailDomain, isValidEmailFormat } from "@/lib/email-validation";
import { rateLimit, clientKey } from "@/lib/rate-limit";
import { EMAIL_COOKIE } from "@/lib/email-access";

const REGISTER_LIMIT = 10; // per window per IP
const REGISTER_WINDOW_MS = 60_000;

export async function POST(request: Request) {
  const rl = rateLimit(clientKey(request, "register"), REGISTER_LIMIT, REGISTER_WINDOW_MS);
  if (!rl.allowed) {
    return NextResponse.json(
      { error: "Too many requests, please slow down" },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
    );
  }

  try {
    const body = await request.json();
    const email: string = body.email ?? "";

    if (!isValidEmailFormat(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Verify the email domain is real (has MX / resolves) before saving.
    const verification = await verifyEmailDomain(email);
    if (!verification.valid) {
      return NextResponse.json(
        { error: verification.reason || "Email domain could not be verified" },
        { status: 400 }
      );
    }

    const existingUser = await userRepository.findByEmail(email);

    // Always set the email cookie so the user can access the dashboard,
    // whether they are new or returning.
    const store = await cookies();
    store.set(EMAIL_COOKIE, email.trim().toLowerCase(), {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Welcome back", userId: existingUser.id, alreadyExists: true },
        { status: 200 }
      );
    }

    const user = await userRepository.create({ email });

    return NextResponse.json(
      { message: "User created successfully", userId: user.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
