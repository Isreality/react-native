import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title' style={styles.title}>Login</ThemedText>
    
      <Pressable>
        <ThemedText>Register Instead</ThemedText>
      </Pressable>

      <Link href="/" asChild>        
        <ThemedText>Login Instead</ThemedText>        
      </Link>
      
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
container: {
    flex: 1,
  },
  title: {
    marginBottom: 10,
  },
})