import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lttosextiocfrbtdbrzg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0dG9zZXh0aW9jZnJidGRicnpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MjMzMDIsImV4cCI6MjA2MzQ5OTMwMn0.7plnl81Orc7yf9xTrIcOu5zbD4I1sJixGGAp8WhAwD0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);