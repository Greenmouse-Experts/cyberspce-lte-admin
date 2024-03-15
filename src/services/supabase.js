import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://asqyfzgqnbxthtasplew.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzcXlmemdxbmJ4dGh0YXNwbGV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkyNDk0MjcsImV4cCI6MjAyNDgyNTQyN30.-3dHPcnG1xcRhpFNLB3bgwnG3a3zPukyHJQeKvqVSXU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
