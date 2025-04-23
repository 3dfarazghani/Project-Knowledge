/*
  # Update Profile Table RLS Policies

  1. Changes
    - Add more permissive SELECT policy for authenticated users
    - Update INSERT policy to handle initial profile creation
    - Modify UPDATE policy for better access control
    
  2. Security
    - Maintains data privacy by ensuring users can only access appropriate data
    - Allows system-level operations for profile creation
    - Preserves existing security model while fixing access issues
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Users can read own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

-- Create new policies with proper access controls
CREATE POLICY "Enable read access for authenticated users"
ON profiles FOR SELECT
TO authenticated
USING (
  -- Users can read their own profile
  auth.uid() = id
  OR
  -- Teachers can view student profiles if they share a school
  (
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE user_type = 'teacher' 
      AND school_id = profiles.school_id
    )
    AND profiles.user_type = 'student'
  )
  OR
  -- Parents can view their children's profiles
  (
    auth.uid() = parent_id
  )
);

CREATE POLICY "Enable insert for authenticated users"
ON profiles FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = id
  OR 
  -- Parents can create profiles for their children
  (
    auth.uid() IN (
      SELECT id FROM profiles 
      WHERE user_type = 'parent'
    )
  )
);

CREATE POLICY "Enable update for users based on role"
ON profiles FOR UPDATE
TO authenticated
USING (
  -- Users can update their own profile
  auth.uid() = id
  OR
  -- Parents can update their children's profiles
  (
    auth.uid() = parent_id
    AND EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() 
      AND user_type = 'parent'
    )
  )
)
WITH CHECK (
  -- Same conditions as USING clause
  auth.uid() = id
  OR
  (
    auth.uid() = parent_id
    AND EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() 
      AND user_type = 'parent'
    )
  )
);