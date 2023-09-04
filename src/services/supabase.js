import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lpwjdrfsnfnnxydhfdtr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwd2pkcmZzbmZubnh5ZGhmZHRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0Njg0OTQsImV4cCI6MjAwOTA0NDQ5NH0.YJXZNELzLl-I4hyaLqYgzCENxvwbjjup27-Gbj5DKxU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
