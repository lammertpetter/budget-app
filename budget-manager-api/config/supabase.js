const { createClient } = require('@supabase/supabase-js');
const fetch = require('node-fetch'); // Add this line

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, { fetch }); // Pass fetch explicitly

module.exports = supabase;