import { StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title' style={styles.title}>Register</ThemedText>

      <Link href="/" asChild>
        {/* <Pressable style={styles.button}> */}
            <ThemedText>Login Instead</ThemedText>
        {/* </Pressable> */}
      </Link>
    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
container: {
    flex: 1,
  },
  title: {
    marginBottom: 10,
  },
})