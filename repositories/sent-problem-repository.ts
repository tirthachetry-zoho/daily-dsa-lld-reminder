import { prisma } from "@/lib/prisma";
import { SentProblem, Problem } from "@prisma/client";

export class SentProblemRepository {
  async findById(id: string): Promise<SentProblem | null> {
    return prisma.sentProblem.findUnique({
      where: { id },
      include: { problem: true },
    });
  }

  async findByUser(
    userId: string,
    limit?: number
  ): Promise<(SentProblem & { problem: Problem })[]> {
    const results = await prisma.sentProblem.findMany({
      where: { userId },
      include: { problem: true },
      orderBy: { sentAt: "desc" },
      take: limit,
    });
    return results as (SentProblem & { problem: Problem })[];
  }

  async findByUserAndProblem(
    userId: string,
    problemId: string
  ): Promise<SentProblem | null> {
    return prisma.sentProblem.findFirst({
      where: { userId, problemId },
      include: { problem: true },
    });
  }

  async findByUserToday(userId: string): Promise<SentProblem | null> {
    const today = new Date();
    const todayStart = new Date(today);
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date(today);
    todayEnd.setHours(23, 59, 59, 999);

    return prisma.sentProblem.findFirst({
      where: {
        userId,
        sentAt: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
      include: { problem: true },
    });
  }

  async create(data: {
    userId: string;
    problemId: string;
  }): Promise<SentProblem> {
    return prisma.sentProblem.create({
      data,
      include: { problem: true },
    });
  }

  async updateCompleted(
    id: string,
    completed: boolean
  ): Promise<SentProblem> {
    return prisma.sentProblem.update({
      where: { id },
      data: { completed },
      include: { problem: true },
    });
  }

  async updateOpened(id: string, opened: boolean): Promise<SentProblem> {
    return prisma.sentProblem.update({
      where: { id },
      data: { opened },
      include: { problem: true },
    });
  }

  async countByUser(userId: string): Promise<number> {
    return prisma.sentProblem.count({
      where: { userId },
    });
  }

  async countCompletedByUser(userId: string): Promise<number> {
    return prisma.sentProblem.count({
      where: { userId, completed: true },
    });
  }
}

export const sentProblemRepository = new SentProblemRepository();
