import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dgafcljlrxyihutnknzq.supabase.co'
const supabaseKey = process.env.VITE_SUPABASE_PUBLISHABLE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)