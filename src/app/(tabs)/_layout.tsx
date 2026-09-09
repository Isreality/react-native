import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/theme';
import { Stack } from 'expo-router';
import AppTabs from '@/components/app-tabs';


export default function TabsLayout() {
  const colorScheme = useColorScheme();
  // const colors = Colors[scheme ?? 'light'];
  return (
    <AppTabs/>
  );
}
