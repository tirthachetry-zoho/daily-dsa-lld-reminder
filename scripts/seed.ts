// Load environment variables from .env before any module that reads them
// (Next.js only auto-loads .env for `next` commands, not for `tsx` scripts).
import { existsSync } from "fs";
import { resolve } from "path";
if (existsSync(resolve(process.cwd(), ".env"))) {
  // Node 20.6+ built-in .env loader
  (process as unknown as { loadEnvFile?: (p: string) => void }).loadEnvFile?.(
    resolve(process.cwd(), ".env")
  );
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 100);
}

async function main() {
  const { supabase } = await import("../lib/supabase");
  const { dsaProblems } = await import("../data/dsaProblems");
  const { systemDesignProblems } = await import("../data/systemDesignProblems");

  console.log("🌱 Seeding problems...");

  // Upsert DSA problems
  for (const problem of dsaProblems) {
    const { error } = await supabase.from("dsa_problems").upsert(
      {
        id: slugify(problem.title),
        title: problem.title,
        difficulty: problem.difficulty,
        topic: problem.topic,
        companies: problem.companies,
        leetcodeUrl: problem.leetcodeUrl,
        solutionUrl: problem.solutionUrl ?? null,
        youtubeUrl: problem.youtubeUrl ?? null,
        type: "DSA",
      },
      { onConflict: "id" }
    );
    if (error) {
      console.error(`Failed to upsert DSA problem ${problem.title}:`, error.message);
    }
  }

  // Upsert System Design problems
  for (const problem of systemDesignProblems) {
    const { error } = await supabase.from("dsa_problems").upsert(
      {
        id: slugify(problem.title),
        title: problem.title,
        difficulty: "MEDIUM",
        topic: "System Design",
        companies: [],
        description: problem.description,
        primaryUrl: problem.primaryUrl,
        solutionUrl: problem.solutionUrl ?? null,
        youtubeUrl: problem.youtubeUrl ?? null,
        type: "SYSTEM_DESIGN",
      },
      { onConflict: "id" }
    );
    if (error) {
      console.error(`Failed to upsert System Design problem ${problem.title}:`, error.message);
    }
  }

  // Count results
  const { count: dsaCount } = await supabase
    .from("dsa_problems")
    .select("*", { count: "exact", head: true })
    .eq("type", "DSA");
  const { count: sdCount } = await supabase
    .from("dsa_problems")
    .select("*", { count: "exact", head: true })
    .eq("type", "SYSTEM_DESIGN");

  console.log(`✅ Seeded ${dsaCount ?? 0} DSA problems and ${sdCount ?? 0} System Design problems.`);
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});