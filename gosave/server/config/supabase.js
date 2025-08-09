import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY; // fallback for dev

let supabaseInstance = null;

export function getSupabase() {
  if (!supabaseInstance) {
    if (!supabaseUrl || !serviceKey) {
      throw new Error('Supabase environment variables are not set');
    }
    supabaseInstance = createClient(supabaseUrl, serviceKey, {
      auth: { persistSession: false },
    });
  }
  return supabaseInstance;
}