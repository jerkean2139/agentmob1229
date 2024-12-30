import { createClient } from '@supabase/supabase-js';

// Default to demo project URL and anon key if env vars aren't available
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://qiczwkwmcvstngaukgbf.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpY3p3a3dtY3ZzdG5nYXVrZ2JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMTQ1MjQsImV4cCI6MjA1MDg5MDUyNH0.MdjAs05Si6-M8TBSdmlp2QQh2mD_9rMGMUxcMZWkfTU';

// Create singleton instance
let supabaseInstance: ReturnType<typeof createClient>;

export const getSupabaseClient = () => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: false
      }
    });
  }
  return supabaseInstance;
};

export const supabase = getSupabaseClient();