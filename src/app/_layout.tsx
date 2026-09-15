import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { ActivityIndicator, View, useColorScheme as useDeviceColorScheme } from 'react-native';
import { useColorScheme } from 'nativewind'; 
import { StatusBar } from 'expo-status-bar';
import { Stack, useRouter } from 'expo-router';
import { useFonts } from "expo-font";
import { useEffect } from 'react';

import { AuthProvider, useAuth } from '@/context/AuthProvider'; 
import { AnimatedSplashOverlay } from '@/components/animated-icon';
import "../../global.css"

SplashScreen.preventAutoHideAsync();

function RootNavigation() {
    const { session, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (loading) return;

        if (session?.user) {
            router.replace('/home');
        } else {
            router.replace('/');
        }
    }, [session, loading]);

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center bg-background dark:bg-background-dark">
                <ActivityIndicator color={"blue"} size={"large"} />
            </View>
        );
    }

    return null; 
}

function RouteLayoutContent() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const systemDeviceScheme = useDeviceColorScheme();

  const [fontsLoaded, fontError] = useFonts({
    "Satoshi-Regular": require("../../assets/fonts/Satoshi-Regular.otf"),
    "Satoshi-Medium": require("../../assets/fonts/Satoshi-Medium.otf"),
    "Satoshi-Bold": require("../../assets/fonts/Satoshi-Bold.otf"),
    "Satoshi-Black": require("../../assets/fonts/Satoshi-Black.otf"),
  });

  useEffect(() => {
    if (systemDeviceScheme) {
      setColorScheme(systemDeviceScheme);
    }
  }, [systemDeviceScheme]);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View className={`flex-1 ${colorScheme === 'dark' ? 'dark' : ''}`}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigation />
        
        <AnimatedSplashOverlay />
        <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        
        <Stack>
          <Stack.Screen name='index' options={{ headerShown: false }}/>
          <Stack.Screen name='(auth)' options={{ headerShown: false }}/>
          <Stack.Screen name='(tabs)' options={{ headerShown: false }}/>
          <Stack.Screen
            name="modal"
            options={{
              presentation: 'card',
              sheetAllowedDetents: [0.25, 0.5, 1],
              sheetInitialDetentIndex: 0,
              sheetGrabberVisible: true,
              sheetCornerRadius: 24,
              sheetLargestUndimmedDetentIndex: 1,
            }}
          />        
        </Stack>
      </ThemeProvider>
    </View>
  );
}

const RouteLayout = () => {
    return (
        <AuthProvider>
            <RouteLayoutContent />
        </AuthProvider>
    );
};

RouteLayout.displayName = 'RouteLayout';
RouteLayoutContent.displayName = 'RouteLayoutContent';
RootNavigation.displayName = 'RootNavigation';

export default RouteLayout;





