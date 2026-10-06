import { AppState, Platform } from "react-native";
import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabasePublishableKey =
  process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  console.warn(
    "Supabase environment variables are missing. Check your .env file."
  );
}

export const supabase = createClient(
  supabaseUrl ?? "",
  supabasePublishableKey ?? "",
  {
    auth: {
      ...(Platform.OS !== "web"
        ? {
            storage: AsyncStorage,
          }
        : {}),
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);

// Keep Supabase auth refreshed while the app is active
if (Platform.OS !== "web") {
  AppState.addEventListener("change", (state) => {
    if (state === "active") {
      supabase.auth.startAutoRefresh();
    } else {
      supabase.auth.stopAutoRefresh();
    }
  });
}


// import { Platform } from 'react-native';
// import { setupURLPolyfill } from 'react-native-url-polyfill';
// import { createClient } from '@supabase/supabase-js'
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Only load the polyfill on mobile platforms to prevent web and bundler crashes
// if (Platform.OS !== 'web') {
//   setupURLPolyfill();
// }


// // import 'expo-sqlite/localStorage/install'
// // setupURLPolyfill();

// const supabaseUrl = (process.env.EXPO_PUBLIC_SUPABASE_URL || '') as string;
// const supabasePublishableKey = (process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '') as string;

// if (!supabaseUrl || !supabasePublishableKey) {
//   console.warn("Supabase environment variables are missing!");
// }

// export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
//   auth: {
//     storage: AsyncStorage,
//     autoRefreshToken: true,
//     persistSession: true,
//     detectSessionInUrl: false,
//   },
// })