
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl) {
    console.log('Supabase url:' + supabaseUrl);
  throw new Error("Missing VITE_SUPABASE_URL");
}

if (!supabaseKey) {
    console.log('Supabase key: ' + supabaseKey);
  throw new Error("Missing VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
