import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 
  (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_SUPABASE_URL) ||
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_URL) ||
  'https://ojywgvmgyabnaulldfxn.supabase.co';

const supabaseAnonKey = 
  (typeof import.meta !== 'undefined' && import.meta.env?.PUBLIC_SUPABASE_ANON_KEY) ||
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SUPABASE_ANON_KEY) ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qeXdndm1neWFibmF1bGxkZnhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI0MjY3NjIsImV4cCI6MjEwODAwMjc2Mn0.sS7-pxbXqifziikPGGWHYJoOsKaTu1QYofIBaZT4U3k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
