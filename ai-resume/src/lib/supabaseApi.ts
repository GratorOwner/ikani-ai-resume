
import { supabase } from "../utils/supabase";

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
