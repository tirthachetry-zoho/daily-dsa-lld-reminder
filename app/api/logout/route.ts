import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { EMAIL_COOKIE } from "@/lib/email-access";

export async function POST() {
  const store = await cookies();
  store.delete(EMAIL_COOKIE);
  return NextResponse.json({ message: "Logged out" });
}