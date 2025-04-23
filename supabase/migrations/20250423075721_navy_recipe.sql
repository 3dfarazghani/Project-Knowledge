/*
  # Update profiles table with additional fields

  1. Changes
    - Add user_type field
    - Add student-specific fields
    - Add teacher/educator fields
    - Add parent fields
    - Add additional profile fields

  2. Security
    - Update RLS policies for new fields
*/

-- Add new fields to profiles table one by one
ALTER TABLE profiles 
  ADD COLUMN IF NOT EXISTS user_type text CHECK (user_type IN ('student', 'teacher', 'parent', 'educator', 'admin')) NOT NULL DEFAULT 'student';

ALTER TABLE profiles 
  ADD COLUMN IF NOT EXISTS profile_completion integer DEFAULT 0,
  ADD COLUMN IF NOT EXISTS consent_gdpr boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS date_of_birth date,
  ADD COLUMN IF NOT EXISTS grade_level text,
  ADD COLUMN IF NOT EXISTS school_id uuid,
  ADD COLUMN IF NOT EXISTS parent_id uuid,
  ADD COLUMN IF NOT EXISTS learning_interests text[],
  ADD COLUMN IF NOT EXISTS special_needs text,
  ADD COLUMN IF NOT EXISTS consent_coppa boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS subjects_taught text[],
  ADD COLUMN IF NOT EXISTS certifications text[],
  ADD COLUMN IF NOT EXISTS years_experience integer,
  ADD COLUMN IF NOT EXISTS bio text,
  ADD COLUMN IF NOT EXISTS availability text,
  ADD COLUMN IF NOT EXISTS linkedin_url text,
  ADD COLUMN IF NOT EXISTS twitter_url text,
  ADD COLUMN IF NOT EXISTS phone_number text,
  ADD COLUMN IF NOT EXISTS child_profiles uuid[],
  ADD COLUMN IF NOT EXISTS communication_prefs text DEFAULT 'email',
  ADD COLUMN IF NOT EXISTS concerns_interests text[],
  ADD COLUMN IF NOT EXISTS profile_visibility boolean DEFAULT true,
  ADD COLUMN IF NOT EXISTS subscription_status text DEFAULT 'free',
  ADD COLUMN IF NOT EXISTS activity_history text[],
  ADD COLUMN IF NOT EXISTS language_preference text DEFAULT 'en',
  ADD COLUMN IF NOT EXISTS timezone text;

-- Update RLS policies
DROP POLICY IF EXISTS "Users can read own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

CREATE POLICY "Users can read own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_profiles_user_type ON profiles(user_type);
CREATE INDEX IF NOT EXISTS idx_profiles_school_id ON profiles(school_id);
CREATE INDEX IF NOT EXISTS idx_profiles_parent_id ON profiles(parent_id);