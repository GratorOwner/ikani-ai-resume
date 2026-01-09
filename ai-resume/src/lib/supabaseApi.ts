
import { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "../utils/supabase";
import type { AgentContext } from "../types/AgentContext";

export async function fetchWorkHistory() {
  const { data, error } = await supabase
    .from("WorkHistory")
    .select("*")
    .order("id", {ascending: true});

  if (error) {
    console.error("Supabase error:", error);
    throw new Error(error.message);
  }

  return data;
}

export async function fetchAiSeedData(code: string) {
  const {data, error} = await supabase
  .from("CompanyRoleDetails")
  .select("*")
  .eq("code", code).single();

  console.log(data);
  if (error) {
    console.error("Supabase error:", error);
    throw new Error(error.message);
  }

  return data;
}

export async function getNextResumeContextIdValue(){
  const {data, error} = await supabase
  .from("AiResumeAppSettings")
  .select("nextIdResumeSkillColl")
  .single();

  //TO DO. Return the current value. Insert incremented by 1 value to the table.
  
  console.log(data);
  if (error) {
    console.error("Supabase error:", error);
    throw new Error(error.message);
  }

  return data;
}
