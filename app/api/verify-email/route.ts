import { NextResponse } from "next/server";
import { verifyEmailDomain, isValidEmailFormat } from "@/lib/email-validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email: string = body.email ?? "";

    if (!isValidEmailFormat(email)) {
      return NextResponse.json(
        { valid: false, reason: "Invalid email format" },
        { status: 200 }
      );
    }

    const result = await verifyEmailDomain(email);
    return NextResponse.json(result, { status: 200 });
  } catch {
    return NextResponse.json(
      { valid: false, reason: "Could not verify the email" },
      { status: 200 }
    );
  }
}