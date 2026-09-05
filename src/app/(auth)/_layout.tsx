import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Stack } from 'expo-router';


export default function AuthLayout() {
  const colorScheme = useColorScheme();
  return (
    <>
      <Stack screenOptions={{ headerShown: false, animation: 'none' }}/>
    </>
  );
}
