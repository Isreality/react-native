import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import "../../global.css"

SplashScreen.preventAutoHideAsync();

export default function RouteLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <StatusBar style='auto'/>
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
    
  );
}
