import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/theme';


export default function AuthLayout() {
  const colorScheme = useColorScheme();
  // const systemScheme = useColorScheme();
  // const scheme = systemScheme === 'dark' ? 'dark' : 'light';
  // const colors = Colors[scheme];

  return (
    <>
      <Stack screenOptions={{ headerShown: false, animation: 'none' }}/>
    </>
  );
}
