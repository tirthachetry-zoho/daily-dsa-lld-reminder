import { prisma } from "@/lib/prisma";
import { Problem, ProblemType } from "@prisma/client";

export class ProblemRepository {
  async findById(id: string): Promise<Problem | null> {
    return prisma.problem.findUnique({
      where: { id },
    });
  }

  async findByType(type: ProblemType): Promise<Problem[]> {
    return prisma.problem.findMany({
      where: { type },
    });
  }

  async findFirstByType(type: ProblemType): Promise<Problem | null> {
    return prisma.problem.findFirst({
      where: { type },
    });
  }

  async findRandomByType(type: ProblemType): Promise<Problem | null> {
    const problems = await prisma.problem.findMany({
      where: { type },
      select: { id: true },
    });
    if (problems.length === 0) return null;
    const random = problems[Math.floor(Math.random() * problems.length)];
    return prisma.problem.findUnique({ where: { id: random.id } });
  }

  async findUnseenByUser(
    userId: string,
    type: ProblemType
  ): Promise<Problem | null> {
    const sentProblemIds = await prisma.sentProblem
      .findMany({
        where: { userId, problem: { type } },
        select: { problemId: true },
      })
      .then((sent) => sent.map((s) => s.problemId));

    return prisma.problem.findFirst({
      where: {
        type,
        id: { notIn: sentProblemIds.length > 0 ? sentProblemIds : undefined },
      },
    });
  }

  async findRandomUnseenByUser(
    userId: string,
    type: ProblemType
  ): Promise<Problem | null> {
    const sentProblemIds = await prisma.sentProblem
      .findMany({
        where: { userId, problem: { type } },
        select: { problemId: true },
      })
      .then((sent) => sent.map((s) => s.problemId));

    const unseen = await prisma.problem.findMany({
      where: {
        type,
        id: { notIn: sentProblemIds.length > 0 ? sentProblemIds : undefined },
      },
      select: { id: true },
    });
    if (unseen.length === 0) return null;
    const random = unseen[Math.floor(Math.random() * unseen.length)];
    return prisma.problem.findUnique({ where: { id: random.id } });
  }

  async create(data: {
    title: string;
    difficulty: "EASY" | "MEDIUM" | "HARD";
    topic: string;
    companies: string[];
    leetcodeUrl?: string;
    solutionUrl?: string;
    youtubeUrl?: string;
    description?: string;
    primaryUrl?: string;
    type: ProblemType;
  }): Promise<Problem> {
    return prisma.problem.create({
      data,
    });
  }

  async countByType(type: ProblemType): Promise<number> {
    return prisma.problem.count({
      where: { type },
    });
  }

  async delete(id: string): Promise<Problem> {
    return prisma.problem.delete({
      where: { id },
    });
  }
}

export const problemRepository = new ProblemRepository();
