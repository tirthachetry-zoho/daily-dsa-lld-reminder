import dns from "dns/promises";

// Basic RFC-ish format check: local@domain.tld
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmailFormat(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

export interface EmailVerificationResult {
  valid: boolean;
  reason?: string;
  checkedDomain?: string;
}

/**
 * Verifies an email by checking its format and then resolving the domain's
 * mail infrastructure (MX records, falling back to an A/AAAA lookup).
 * Returns a clear reason when the email/domain is not deliverable.
 */
export async function verifyEmailDomain(
  email: string
): Promise<EmailVerificationResult> {
  const normalized = email.trim().toLowerCase();

  if (!isValidEmailFormat(normalized)) {
    return { valid: false, reason: "Invalid email format" };
  }

  const domain = normalized.split("@")[1];

  try {
    const mxRecords = await dns.resolveMx(domain);
    if (mxRecords && mxRecords.length > 0) {
      return { valid: true, checkedDomain: domain };
    }

    // No MX records — fall back to checking the domain resolves at all.
    try {
      await dns.lookup(domain);
      return { valid: true, checkedDomain: domain };
    } catch {
      return {
        valid: false,
        reason: `Domain "${domain}" has no mail server (MX) configured`,
        checkedDomain: domain,
      };
    }
  } catch (err: unknown) {
    const code = (err as NodeJS.ErrnoException)?.code;
    if (code === "ENOTFOUND" || code === "ENODATA") {
      return {
        valid: false,
        reason: `Domain "${domain}" does not exist`,
        checkedDomain: domain,
      };
    }
    return {
      valid: false,
      reason: "Could not verify the email domain",
      checkedDomain: domain,
    };
  }
}