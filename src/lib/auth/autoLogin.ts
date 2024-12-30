import { supabase } from '../supabase/client';

// Demo credentials
const DEMO_EMAIL = 'demo@example.com';
const DEMO_PASSWORD = 'demo123';

export async function autoLogin() {
  try {
    // Check if already logged in
    const { data: { user } } = await supabase.auth.getUser();
    if (user) return true;

    // Auto sign-in for demo/development
    const { error } = await supabase.auth.signInWithPassword({
      email: DEMO_EMAIL,
      password: DEMO_PASSWORD
    });

    if (error) {
      // If login fails, create a demo user
      const { error: signUpError } = await supabase.auth.signUp({
        email: DEMO_EMAIL,
        password: DEMO_PASSWORD,
        options: {
          data: {
            name: 'Demo User'
          }
        }
      });

      if (signUpError) {
        console.warn('Failed to create demo user:', signUpError);
        return false;
      }
    }

    return true;
  } catch (error) {
    console.warn('Auto-login failed:', error);
    return false;
  }
}