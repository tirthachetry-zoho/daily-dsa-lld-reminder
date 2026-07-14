import { NextResponse } from "next/server";
import { sentProblemRepository } from "@/repositories/sent-problem-repository";
import { resolveUser } from "@/lib/email-access";

export async function GET(request: Request) {
  try {
    const resolved = await resolveUser();
    if (!resolved?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "50");

    const sentProblems = await sentProblemRepository.findByUser(
      resolved.user.id,
      limit
    );

    return NextResponse.json(sentProblems);
  } catch (error) {
    console.error("History fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
