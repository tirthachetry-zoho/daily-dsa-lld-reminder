import { supabase } from "@/lib/supabase";

export type ProblemType = "DSA" | "SYSTEM_DESIGN";
export type Difficulty = "EASY" | "MEDIUM" | "HARD";

export interface ProblemRow {
  id: string;
  title: string;
  difficulty: Difficulty;
  topic: string;
  companies: string[];
  leetcode_url: string | null;
  solution_url: string | null;
  youtube_url: string | null;
  description: string | null;
  primary_url: string | null;
  type: ProblemType;
  created_at: string;
}

export class ProblemRepository {
  async findById(id: string): Promise<ProblemRow | null> {
    const { data, error } = await supabase
      .from("dsa_problems")
      .select("*")
      .eq("id", id)
      .maybeSingle();
    if (error) throw error;
    return data as ProblemRow | null;
  }

  async findByType(type: ProblemType): Promise<ProblemRow[]> {
    const { data, error } = await supabase
      .from("dsa_problems")
      .select("*")
      .eq("type", type);
    if (error) throw error;
    return (data as ProblemRow[]) ?? [];
  }

  async findRandomByType(type: ProblemType): Promise<ProblemRow | null> {
    const { data, error } = await supabase
      .from("dsa_problems")
      .select("id")
      .eq("type", type);
    if (error) throw error;
    const rows = (data as { id: string }[]) ?? [];
    if (rows.length === 0) return null;
    const random = rows[Math.floor(Math.random() * rows.length)];
    return this.findById(random.id);
  }

  async findRandomUnseenByUser(
    userId: string,
    type: ProblemType
  ): Promise<ProblemRow | null> {
    // Fetch ids of problems already sent to this user of this type
    const { data: sent, error: sentError } = await supabase
      .from("dsa_sent_problems")
      .select("problem_id")
      .eq("user_id", userId);
    if (sentError) throw sentError;

    const sentIds = (sent as { problem_id: string }[]).map((s) => s.problem_id);

    let query = supabase.from("dsa_problems").select("id").eq("type", type);
    if (sentIds.length > 0) {
      query = query.not("id", "in", `(${sentIds.join(",")})`);
    }
    const { data, error } = await query;
    if (error) throw error;

    const unseen = (data as { id: string }[]) ?? [];
    if (unseen.length === 0) return null;
    const random = unseen[Math.floor(Math.random() * unseen.length)];
    return this.findById(random.id);
  }

  async create(data: {
    title: string;
    difficulty: Difficulty;
    topic: string;
    companies: string[];
    leetcode_url?: string;
    solution_url?: string;
    youtube_url?: string;
    description?: string;
    primary_url?: string;
    type: ProblemType;
  }): Promise<ProblemRow> {
    const { data: created, error } = await supabase
      .from("dsa_problems")
      .insert({
        title: data.title,
        difficulty: data.difficulty,
        topic: data.topic,
        companies: data.companies,
        leetcode_url: data.leetcode_url ?? null,
        solution_url: data.solution_url ?? null,
        youtube_url: data.youtube_url ?? null,
        description: data.description ?? null,
        primary_url: data.primary_url ?? null,
        type: data.type,
      })
      .select("*")
      .single();
    if (error) throw error;
    return created as ProblemRow;
  }

  async countByType(type: ProblemType): Promise<number> {
    const { count, error } = await supabase
      .from("dsa_problems")
      .select("*", { count: "exact", head: true })
      .eq("type", type);
    if (error) throw error;
    return count ?? 0;
  }

  async delete(id: string): Promise<ProblemRow> {
    const { data, error } = await supabase
      .from("dsa_problems")
      .delete()
      .eq("id", id)
      .select("*")
      .single();
    if (error) throw error;
    return data as ProblemRow;
  }
}

export const problemRepository = new ProblemRepository();