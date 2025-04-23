import { create } from 'zustand';
import { supabase } from '../lib/supabase';

export type UserType = 'student' | 'teacher' | 'parent' | 'educator' | 'admin';

interface User {
  id: string;
  email: string;
  user_type: UserType;
  full_name?: string;
  avatar_url?: string;
  profile_completion?: number;
  consent_gdpr?: boolean;
  date_of_birth?: string;
  grade_level?: string;
  school_id?: string;
  parent_id?: string;
  learning_interests?: string[];
  special_needs?: string;
  consent_coppa?: boolean;
  subjects_taught?: string[];
  certifications?: string[];
  years_experience?: number;
  bio?: string;
  availability?: string;
  linkedin_url?: string;
  twitter_url?: string;
  phone_number?: string;
  child_profiles?: string[];
  communication_prefs?: string;
  concerns_interests?: string[];
  profile_visibility?: boolean;
  subscription_status?: string;
  activity_history?: string[];
  language_preference?: string;
  timezone?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, userType: UserType, userData: Partial<User>) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  loading: true,
  signIn: async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  },
  signUp: async (email: string, password: string, userType: UserType, userData: Partial<User>) => {
    // First sign up the user with Supabase Auth
    const { error: signUpError, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          user_type: userType,
          full_name: userData.full_name,
        },
      },
    });
    
    if (signUpError) throw signUpError;

    if (!data.user) {
      throw new Error('User creation failed');
    }

    try {
      // Then create the profile
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([{
          id: data.user.id,
          email,
          user_type: userType,
          ...userData,
          profile_completion: 20,
        }]);

      if (profileError) {
        // If profile creation fails, we should clean up the auth user
        await supabase.auth.signOut();
        throw profileError;
      }
    } catch (error) {
      // If anything fails during profile creation, clean up and throw
      await supabase.auth.signOut();
      throw error;
    }
  },
  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    set({ user: null });
  },
  updateProfile: async (data: Partial<User>) => {
    const user = get().user;
    if (!user) throw new Error('No user logged in');

    const { error } = await supabase
      .from('profiles')
      .update(data)
      .eq('id', user.id);

    if (error) throw error;

    set({ user: { ...user, ...data } });
  },
  setUser: (user) => set({ user, loading: false }),
}));

// Initialize auth state
supabase.auth.onAuthStateChange(async (event, session) => {
  if (session?.user) {
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();

    if (!error && profile) {
      useAuthStore.getState().setUser(profile);
    } else {
      // If we can't get the profile, sign out
      await supabase.auth.signOut();
      useAuthStore.getState().setUser(null);
    }
  } else {
    useAuthStore.getState().setUser(null);
  }
});