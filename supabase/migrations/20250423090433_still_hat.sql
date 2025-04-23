/*
  # Update profiles table RLS policies

  1. Security Changes
    - Drop existing RLS policies for profiles table
    - Create new comprehensive RLS policies:
      - SELECT: Users can read their own profile
      - INSERT: Users can insert their own profile
      - UPDATE: Users can update their own profile
    - Policies use auth.uid() = id to ensure users can only access their own data
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can read own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

-- Create new policies
CREATE POLICY "Users can read own profile"
ON profiles
FOR SELECT
TO authenticated
USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
ON profiles
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile"
ON profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);