import { createClient } from '@supabase/supabase-js';

// KITA TEMBAK LANGSUNG (HARDCODE) SUPAYA PASTI JALAN
const supabaseUrl = "https://ivkatcmuhhwwjicykwuk.supabase.co";
const supabaseKey = "sb_publishable_P6j8X90tSfuMPqWgZDg2MA_KS41z9fw";

// Membuat sambungan telepon ke Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);