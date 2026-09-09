import { StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const Cart = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type='title' style={styles.title}>Cart</ThemedText>
    </ThemedView>
  )
}

export default Cart

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