// filepath: budget-manager-api/config/supabase.js
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://ovhybthphwbjzktleeoh.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY; // Usa la clave de tu archivo .env
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;