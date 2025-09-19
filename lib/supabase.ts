import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy_anon_key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Profile {
  id: string
  email: string
  name: string
  short_bio?: string
  profile_picture_url?: string
  skills_to_teach?: string[]
  skills_to_learn?: string[]
  level: number
  exp_points: number
  created_at: string
  updated_at: string
}

export interface Skill {
  id: string
  name: string
  category: string
  description?: string
}

export interface UserSkill {
  id: string
  user_id: string
  skill_id: string
  skill_type: 'teach' | 'learn'
  proficiency_level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  created_at: string
}

export interface Session {
  id: string
  teacher_id: string
  student_id: string
  skill_id: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  scheduled_date: string
  duration_minutes: number
  meeting_link?: string
  notes?: string
  rating?: number
  feedback?: string
  created_at: string
  updated_at: string
}
