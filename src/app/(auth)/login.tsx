import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import ThemedButton from '@/components/ThemedButton';

const Login = () => {
  const handleSubmit = () => {
    alert('Form submitted successfully')
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title' style={styles.title}>Login</ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <ThemedText style={{ color: '#ffffff'}}> Log In</ThemedText>
      </ThemedButton>


      <Link href="/register" asChild>        
        <ThemedText>Register Instead</ThemedText>        
      </Link>
      
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
})