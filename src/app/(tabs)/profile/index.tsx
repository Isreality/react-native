import { Button, StyleSheet, Alert, Pressable } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAuth } from '@/context/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { Link, useRouter } from 'expo-router';
import { Colors } from '@/constants/theme';
import { useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Profile = () => {
  const systemScheme = useColorScheme();
  const scheme = systemScheme === 'dark' ? 'dark' : 'light';
  const colors = Colors[scheme];
  const router = useRouter();

  const { signOut } = useAuth() || {};

  const handleSignOut = async () => {
    try {
      if (signOut) {
        await signOut();
      }

      // Force clear local storage keys where Supabase caches tokens
      await AsyncStorage.removeItem('sb-access-token');
      await AsyncStorage.removeItem('sb-refresh-token');
      

      Alert.alert("Success", "Logged out successfully!");
    } catch (error: any) {
      console.error('Error signing out:', error);
      Alert.alert("Sign Out Error", error.message || "Failed to clear local session.");
    }
  };

  return (
    <ThemedView className="flex-1 bg-background dark:bg-background-dark px-6 mt-20">
      <SafeAreaView className="items-center gap-4 max-w-225 w-full mt-10 ">
        <Pressable onPress={() => router.push('/profile/manage')}>
          <ThemedText>Manage Profile</ThemedText>
        </Pressable>

        <Pressable onPress={() => router.push('/profile/password')}>
          <ThemedText>Change Password</ThemedText>
        </Pressable>

        <Pressable onPress={handleSignOut}>
          <ThemedText>Sign Out</ThemedText>
        </Pressable>

        <Button title="Sign Out" className='bg-primary' onPress={handleSignOut} />
      </SafeAreaView>
    </ThemedView>
    
  )
}

export default Profile

// const styles = StyleSheet.create({
// container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
// },
// title: {
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: 'bold',
// },
// })