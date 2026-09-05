import { StyleSheet, Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { Colors } from '@/constants/theme';

interface ThemedButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
}


function ThemedButton ({ style, ...props }: ThemedButtonProps) {
  return (  
      <Pressable 
        // onPress={handleSubmit}
        style={({pressed}) => [styles.btn, pressed && styles.pressed, style]}
        {...props}
      />
    
  )
}

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
  btn: {
    backgroundColor: Colors.primary,
    textAlign: 'center',
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8,
  },
})

export default ThemedButton