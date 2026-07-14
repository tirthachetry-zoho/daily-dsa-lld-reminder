import { cookies } from "next/headers";
import { userRepository } from "@/repositories/user-repository";
import { isValidEmailFormat } from "@/lib/email-validation";

export const EMAIL_COOKIE = "dsa_reminder_email";

/**
 * Resolves the current user from either an explicit `email` value
 * (query param / JSON body) or the persisted email cookie.
 * Returns the user row, or null if not found / invalid.
 */
export async function resolveUser(email?: string | null): Promise<{
  user: Awaited<ReturnType<typeof userRepository.findByEmail>>;
  email?: string;
} | null> {
  let resolved = (email ?? "").trim().toLowerCase();

  if (!resolved) {
    const store = await cookies();
    resolved = (store.get(EMAIL_COOKIE)?.value ?? "").trim().toLowerCase();
  }

  if (!resolved || !isValidEmailFormat(resolved)) {
    return null;
  }

  const user = await userRepository.findByEmail(resolved);
  if (!user) return null;
  return { user, email: resolved };
}

/** Set the email cookie (30 days). */
export async function setEmailCookie(email: string): Promise<void> {
  const store = await cookies();
  store.set(EMAIL_COOKIE, email.trim().toLowerCase(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
}