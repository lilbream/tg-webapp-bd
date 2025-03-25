// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Замените URL и ключ на свои значения из Supabase
const supabaseUrl = 'https://ffxwtsgarmclejevneiw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmeHd0c2dhcm1jbGVqZXZuZWl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MDUzMjgsImV4cCI6MjA1ODQ4MTMyOH0.bs0j0z7xXi9vx8DLx7ajdw-kIRJ_k_JH1flqJkO3gLo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
