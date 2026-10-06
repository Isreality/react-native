import "../global.css";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {useEffect } from "react";
import {AuthProvider, useAuth} from "@/context/AuthProvider";
import { Colors } from "@/constants/theme";

// SplashScreen.preventAutoHideAsync();

function RootNavigator() {
  const { session } = useAuth();
  const systemScheme = useColorScheme();
  const scheme = systemScheme === 'dark' ? 'dark' : 'light';
  const colors = Colors[scheme];

  return (
    <Stack>
      {/* Logged out users */}
      <Stack.Protected guard={!session}>
        <Stack.Screen name="(auth)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Protected>

      {/* Logged in users */}
      <Stack.Protected guard={!!session}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="modal"
          options={{
            presentation: "formSheet",

            sheetAllowedDetents: [
              0.25,
              0.5,
              1,
            ],

            sheetInitialDetentIndex: 0,

            sheetGrabberVisible: true,

            sheetCornerRadius: 24,

            sheetLargestUndimmedDetentIndex: 1,
          }}
        />
      </Stack.Protected>
    </Stack>
  );
}

function AppContent() {
  const colorScheme = useColorScheme();

  const {
    loading: authLoading,
  } = useAuth();

  const [
    fontsLoaded,
    fontError,
  ] = useFonts({
    "Satoshi-Regular": require(
      "../../assets/fonts/Satoshi-Regular.otf"
    ),

    "Satoshi-Medium": require(
      "../../assets/fonts/Satoshi-Medium.otf"
    ),

    "Satoshi-Bold": require(
      "../../assets/fonts/Satoshi-Bold.otf"
    ),

    "Satoshi-Black": require(
      "../../assets/fonts/Satoshi-Black.otf"
    ),
  });

  // const appReady =
  //   (fontsLoaded || !!fontError) &&
  //   !authLoading;

  // useEffect(() => {
  //   if (appReady) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [appReady]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (authLoading) {
    return null;
  }

  return (
    <ThemeProvider
      value={
        colorScheme === "dark"
          ? DarkTheme
          : DefaultTheme
      }
    >
      <RootNavigator />

      <StatusBar
        style={
          colorScheme === "dark"
            ? "light"
            : "dark"
        }
      />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

// import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router/react-navigation";
// import * as SplashScreen from 'expo-splash-screen';
// import { ActivityIndicator, View, useColorScheme as useDeviceColorScheme } from 'react-native';
// import { useColorScheme } from 'nativewind'; 
// import { StatusBar } from 'expo-status-bar';
// import { Stack, useRouter, useSegments } from 'expo-router';
// import { useFonts } from "expo-font";
// import { useEffect } from 'react';

// import { AuthProvider, useAuth } from '@/context/AuthProvider'; 
// import { AnimatedSplashOverlay } from '@/components/animated-icon';


// SplashScreen.preventAutoHideAsync();

// function RootNavigation() {
//     const { session, loading } = useAuth();
//     const router = useRouter();
//     const segments = useSegments() as string[]; 

//     useEffect(() => {
//         if (loading) return;

//          const timeoutId = setTimeout(() => {
//             const inTabs = segments.includes('(tabs)');
            
//             if (session?.user) {
//                 // Only redirect if they aren't already heading to or inside home/tabs
//                 if (!inTabs) {
//                     router.replace('/home');
//                 }
//             } else {
//                 // Only redirect if they aren't already on the landing screen
//                 if (segments.length > 0 && segments[0] !== 'index') {
//                     router.replace('/');
//                 }
//             }
//         }, 1);

//         return () => clearTimeout(timeoutId);

//         // if (session?.user) {
//         //     router.replace('/home');
//         // } else {
//         //     router.replace('/');
//         // }
//     }, [session, loading, segments]);

//     if (loading) {
//         return (    
//           <View className="flex-1 justify-center items-center bg-background dark:bg-background-dark">
//               <ActivityIndicator color={"blue"} size={"large"} />
//           </View>
//         );
//     }

//     return null; 
// }

// function RouteLayoutContent() {
//   const { colorScheme, setColorScheme } = useColorScheme();
//   const systemDeviceScheme = useDeviceColorScheme();

//   const [fontsLoaded, fontError] = useFonts({
//     "Satoshi-Regular": require("../../assets/fonts/Satoshi-Regular.otf"),
//     "Satoshi-Medium": require("../../assets/fonts/Satoshi-Medium.otf"),
//     "Satoshi-Bold": require("../../assets/fonts/Satoshi-Bold.otf"),
//     "Satoshi-Black": require("../../assets/fonts/Satoshi-Black.otf"),
//   });

//   useEffect(() => {
//     if (systemDeviceScheme) {
//       setColorScheme(systemDeviceScheme);
//     }
//   }, [systemDeviceScheme]);

//   useEffect(() => {
//     if (fontsLoaded || fontError) {
//       SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded, fontError]);

//   if (!fontsLoaded && !fontError) {
//     return null;
//   }

//   return (
//     <View className={`flex-1 ${colorScheme === 'dark' ? 'dark' : ''}`}>
//       <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//         <RootNavigation />
        
//         <AnimatedSplashOverlay />
//         <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        
//         <Stack>
//           <Stack.Screen name='index' options={{ headerShown: false }}/>
//           <Stack.Screen name='(auth)' options={{ headerShown: false }}/>
//           <Stack.Screen name='(tabs)' options={{ headerShown: false }}/>
//           <Stack.Screen
//             name="modal"
//             options={{
//               presentation: 'formSheet',
//               sheetAllowedDetents: [0.25, 0.5, 1],
//               sheetInitialDetentIndex: 0,
//               sheetGrabberVisible: true,
//               sheetCornerRadius: 24,
//               sheetLargestUndimmedDetentIndex: 1,
//             }}
//           />        
//         </Stack>
//       </ThemeProvider>
//     </View>
//   );
// }

// const RouteLayout = () => {
//     return (
//         <AuthProvider>
//             <RouteLayoutContent />
//         </AuthProvider>
//     );
// };

// RouteLayout.displayName = 'RouteLayout';
// RouteLayoutContent.displayName = 'RouteLayoutContent';
// RootNavigation.displayName = 'RootNavigation';

// export default RouteLayout;









