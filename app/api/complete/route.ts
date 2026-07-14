import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { sentProblemRepository } from "@/repositories/sent-problem-repository";
import { z } from "zod";

const completeSchema = z.object({
  sentProblemId: z.string(),
  completed: z.boolean(),
});

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { sentProblemId, completed } = completeSchema.parse(body);

    // Verify the sent problem belongs to the user
    const existing = await sentProblemRepository.findById(sentProblemId);
    if (!existing || existing.user_id !== session.user.id) {
      return NextResponse.json(
        { error: "Sent problem not found" },
        { status: 404 }
      );
    }

    const updated = await sentProblemRepository.updateCompleted(
      sentProblemId,
      completed
    );

    return NextResponse.json(updated);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input" },
        { status: 400 }
      );
    }

    console.error("Complete update error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}