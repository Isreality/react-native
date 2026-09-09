import { StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const Home = () => {
  return (
    <ThemedView style={styles.container} safe= {false}>
      <ThemedText type='title' style={styles.title}>Home</ThemedText>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
},
})