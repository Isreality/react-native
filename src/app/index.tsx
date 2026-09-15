import * as Device from 'expo-device';
import { Platform, StyleSheet, Button, Pressable, Text, Alert } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';
import AppTabs from '@/components/app-tabs';

import Login from './(auth)/login'
import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

// function getDevMenuHint() {
//   if (Platform.OS === 'web') {
//     return <ThemedText type="small">use browser devtools</ThemedText>;
//   }
//   if (Device.isDevice) {
//     return (
//       <ThemedText type="small">
//         shake device or press <ThemedText type="code">m</ThemedText> in terminal
//       </ThemedText>
//     );
//   }
//   const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
//   return (
//     <ThemedText type="small">
//       press <ThemedText type="code">{shortcut}</ThemedText>
//     </ThemedText>
//   );
// }

const image = <Image source={require('@/assets/images/react-logo.png')} style={{ width: 100, height: 100 }} />;
// const router = useRouter();

export default function HomeScreen() {
  const router = useRouter();

  //  const handleOpenAlert = () => {
  //   Alert.alert(
  //     "Are you sure you want to proceed?",
  //     "",
  //     [
  //       { text: "Cancel", style: "cancel" },
  //       { 
  //         text: "Confirm", 
  //         style: "destructive", 
  //         onPress: () => router.push('/modal') // Navigates on confirm
  //       },
  //     ]
  //   );
  // };

  return (
    <Login/>
  );
}

const styles = StyleSheet.create({ });
