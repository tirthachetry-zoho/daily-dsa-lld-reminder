import { PrismaClient } from "@prisma/client";
import { dsaProblems } from "../data/dsaProblems";
import { systemDesignProblems } from "../data/systemDesignProblems";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Clear existing problems
  await prisma.problem.deleteMany({});
  console.log("🗑️  Cleared existing problems");

  // Seed DSA problems
  for (const problem of dsaProblems) {
    await prisma.problem.create({
      data: {
        title: problem.title,
        difficulty: problem.difficulty,
        topic: problem.topic,
        companies: problem.companies,
        leetcodeUrl: problem.leetcodeUrl,
        solutionUrl: problem.solutionUrl,
        youtubeUrl: problem.youtubeUrl,
        type: "DSA",
      },
    });
  }
  console.log(`✅ Seeded ${dsaProblems.length} DSA problems`);

  // Seed System Design problems
  for (const problem of systemDesignProblems) {
    await prisma.problem.create({
      data: {
        title: problem.title,
        difficulty: "MEDIUM",
        topic: "System Design",
        companies: [],
        description: problem.description,
        primaryUrl: problem.primaryUrl,
        solutionUrl: problem.solutionUrl,
        youtubeUrl: problem.youtubeUrl,
        type: "SYSTEM_DESIGN",
      },
    });
  }
  console.log(`✅ Seeded ${systemDesignProblems.length} System Design problems`);

  console.log("🎉 Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
