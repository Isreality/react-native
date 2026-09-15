import { Platform } from 'react-native';
import { setupURLPolyfill } from 'react-native-url-polyfill';
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage';

// Only load the polyfill on mobile platforms to prevent web and bundler crashes
if (Platform.OS !== 'web') {
  setupURLPolyfill();
}


// import 'expo-sqlite/localStorage/install'
setupURLPolyfill();

const supabaseUrl = (process.env.EXPO_PUBLIC_SUPABASE_URL || '') as string;
const supabasePublishableKey = (process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '') as string;

if (!supabaseUrl || !supabasePublishableKey) {
  console.warn("⚠️ Supabase environment variables are missing! Check your .env file.");
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})