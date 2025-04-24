/*
  # Create analytics table for educator dashboard

  1. New Tables
    - `analytics`
      - `id` (uuid, primary key)
      - `date` (date, not null)
      - `activeStudents` (integer, not null)
      - `completedLessons` (integer, not null)
      - `averageScore` (numeric, not null)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on analytics table
    - Add policy for authenticated educators to read analytics data
*/

-- Create the analytics table
CREATE TABLE IF NOT EXISTS analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  activeStudents integer NOT NULL,
  completedLessons integer NOT NULL,
  averageScore numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;

-- Create policy for educators to read analytics
CREATE POLICY "Educators can read analytics data"
ON analytics
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles
    WHERE profiles.id = auth.uid()
    AND (profiles.user_type = 'educator' OR profiles.user_type = 'teacher' OR profiles.user_type = 'admin')
  )
);

-- Insert initial data
INSERT INTO analytics (date, activeStudents, completedLessons, averageScore)
VALUES
  ('2025-04-01', 2100, 145, 85),
  ('2025-04-02', 2150, 148, 86),
  ('2025-04-03', 2200, 152, 87),
  ('2025-04-04', 2250, 154, 86),
  ('2025-04-05', 2300, 156, 88),
  ('2025-04-06', 2345, 156, 87);