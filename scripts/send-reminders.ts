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

async function main() {
  const { reminderService } = await import("../services/reminder-service");

  console.log("🚀 Starting reminder processing...");

  try {
    const results = await reminderService.processReminders();

    console.log("✅ Reminder processing completed");
    console.log("Results:", JSON.stringify(results, null, 2));

    process.exit(0);
  } catch (error) {
    console.error("❌ Error processing reminders:", error);
    process.exit(1);
  }
}

main();