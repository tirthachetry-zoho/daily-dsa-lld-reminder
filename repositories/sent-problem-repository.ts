import { supabase } from "@/lib/supabase";
import { ProblemRow } from "@/repositories/problem-repository";
import { cacheGet, cacheSet, cacheDeleteByPrefix, TTL } from "@/lib/cache";

export interface SentProblemRow {
  id: string;
  user_id: string;
  problem_id: string;
  sent_at: string;
  opened: boolean;
  completed: boolean;
  problem?: ProblemRow;
}

export class SentProblemRepository {
  async findById(id: string): Promise<SentProblemRow | null> {
    const { data, error } = await supabase
      .from("dsa_sent_problems")
      .select("*, problem:dsa_problems(*)")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    return data as SentProblemRow | null;
  }

  async findByUser(userId: string, limit?: number): Promise<SentProblemRow[]> {
    const key = `sent:user:${userId}:${limit ?? "all"}`;
    const cached = cacheGet<SentProblemRow[]>(key);
    if (cached) return cached;

    let query = supabase
      .from("dsa_sent_problems")
      .select("*, problem:dsa_problems(*)")
      .eq("user_id", userId)
      .order("sent_at", { ascending: false });
    if (limit) query = query.limit(limit);
    const { data, error } = await query;
    if (error) throw error;
    const rows = (data as SentProblemRow[]) ?? [];
    cacheSet(key, rows, TTL.SHORT);
    return rows;
  }

  async findByUserAndProblem(
    userId: string,
    problemId: string
  ): Promise<SentProblemRow | null> {
    const { data, error } = await supabase
      .from("dsa_sent_problems")
      .select("*, problem:dsa_problems(*)")
      .eq("user_id", userId)
      .eq("problem_id", problemId)
      .maybeSingle();
    if (error) throw error;
    return data as SentProblemRow | null;
  }

  async findByUserToday(userId: string): Promise<SentProblemRow | null> {
    const today = new Date();
    const todayStart = new Date(today);
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date(today);
    todayEnd.setHours(23, 59, 59, 999);

    const { data, error } = await supabase
      .from("dsa_sent_problems")
      .select("*, problem:dsa_problems(*)")
      .eq("user_id", userId)
      .gte("sent_at", todayStart.toISOString())
      .lte("sent_at", todayEnd.toISOString())
      .maybeSingle();
    if (error) throw error;
    return data as SentProblemRow | null;
  }

  async create(data: {
    userId: string;
    problemId: string;
  }): Promise<SentProblemRow> {
    const { data: created, error } = await supabase
      .from("dsa_sent_problems")
      .insert({ user_id: data.userId, problem_id: data.problemId })
      .select("*, problem:dsa_problems(*)")
      .single();
    if (error) throw error;
    cacheDeleteByPrefix(`sent:user:${data.userId}:`);
    return created as SentProblemRow;
  }

  async updateCompleted(
    id: string,
    completed: boolean
  ): Promise<SentProblemRow> {
    const { data, error } = await supabase
      .from("dsa_sent_problems")
      .update({ completed })
      .eq("id", id)
      .select("*, problem:dsa_problems(*)")
      .single();
    if (error) throw error;
    cacheDeleteByPrefix(`sent:user:`);
    return data as SentProblemRow;
  }

  async updateOpened(id: string, opened: boolean): Promise<SentProblemRow> {
    const { data, error } = await supabase
      .from("dsa_sent_problems")
      .update({ opened })
      .eq("id", id)
      .select("*, problem:dsa_problems(*)")
      .single();
    if (error) throw error;
    return data as SentProblemRow;
  }

  async countByUser(userId: string): Promise<number> {
    const { count, error } = await supabase
      .from("dsa_sent_problems")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId);
    if (error) throw error;
    return count ?? 0;
  }

  async countCompletedByUser(userId: string): Promise<number> {
    const { count, error } = await supabase
      .from("dsa_sent_problems")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId)
      .eq("completed", true);
    if (error) throw error;
    return count ?? 0;
  }
}

export const sentProblemRepository = new SentProblemRepository();