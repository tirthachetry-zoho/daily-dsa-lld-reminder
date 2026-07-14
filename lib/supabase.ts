import { createClient, SupabaseClient } from "@supabase/supabase-js";

const globalForSupabase = global as unknown as {
  supabase: SupabaseClient | undefined;
};

export const supabase =
  globalForSupabase.supabase ||
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        // We use the service role key server-side; disable auto-refresh.
        persistSession: false,
        autoRefreshToken: false,
      },
    }
  );

if (process.env.NODE_ENV !== "production") {
  globalForSupabase.supabase = supabase;
}