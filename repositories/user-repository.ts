import { supabase } from "@/lib/supabase";
import { cacheGet, cacheSet, cacheDelete, cacheDeleteByPrefix, TTL } from "@/lib/cache";

export interface UserRow {
  id: string;
  email: string;
  password: string | null;
  timezone: string;
  reminder_time: string;
  frequency_days: number;
  system_design_frequency: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export class UserRepository {
  async findById(id: string): Promise<UserRow | null> {
    const { data, error } = await supabase
      .from("dsa_users")
      .select("*")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    return data as UserRow | null;
  }

  async findByEmail(email: string): Promise<UserRow | null> {
    const key = `user:email:${email.toLowerCase()}`;
    const cached = cacheGet<UserRow>(key);
    if (cached) return cached;

    const { data, error } = await supabase
      .from("dsa_users")
      .select("*")
      .eq("email", email)
      .maybeSingle();
    if (error) throw error;
    const row = data as UserRow | null;
    if (row) cacheSet(key, row, TTL.MEDIUM);
    return row;
  }

  async create(data: {
    email: string;
    password?: string;
  }): Promise<UserRow> {
    const { data: created, error } = await supabase
      .from("dsa_users")
      .insert({
        email: data.email,
        password: data.password ?? null,
      })
      .select("*")
      .single();
    if (error) throw error;
    cacheDeleteByPrefix("user:active:");
    return created as UserRow;
  }

  async update(
    id: string,
    data: Partial<{
      timezone: string;
      reminder_time: string;
      frequency_days: number;
      system_design_frequency: number;
      is_active: boolean;
    }>
  ): Promise<UserRow> {
    const { data: updated, error } = await supabase
      .from("dsa_users")
      .update(data)
      .eq("id", id)
      .select("*")
      .single();
    if (error) throw error;
    cacheDeleteByPrefix(`user:id:${id}:`);
    cacheDeleteByPrefix("user:active:");
    return updated as UserRow;
  }

  async findActiveUsers(): Promise<UserRow[]> {
    const key = "user:active:all";
    const cached = cacheGet<UserRow[]>(key);
    if (cached) return cached;

    const { data, error } = await supabase
      .from("dsa_users")
      .select("*")
      .eq("is_active", true);
    if (error) throw error;
    const rows = (data as UserRow[]) ?? [];
    cacheSet(key, rows, TTL.ACTIVE_USERS);
    return rows;
  }

  async delete(id: string): Promise<UserRow> {
    const { data, error } = await supabase
      .from("dsa_users")
      .delete()
      .eq("id", id)
      .select("*")
      .single();
    if (error) throw error;
    cacheDeleteByPrefix(`user:id:${id}:`);
    cacheDeleteByPrefix("user:active:");
    return data as UserRow;
  }
}

export const userRepository = new UserRepository();