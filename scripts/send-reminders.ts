import { reminderService } from "../services/reminder-service";

async function main() {
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
