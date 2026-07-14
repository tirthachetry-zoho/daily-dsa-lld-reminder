import { NextResponse } from "next/server";
import { userRepository } from "@/repositories/user-repository";
import { isValidEmailFormat } from "@/lib/email-validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email: string = (body.email ?? "").trim().toLowerCase();

    if (!isValidEmailFormat(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const user = await userRepository.findByEmail(email);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await userRepository.update(user.id, { is_active: false });
    return NextResponse.json({ message: "Unsubscribed successfully" }, { status: 200 });
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}