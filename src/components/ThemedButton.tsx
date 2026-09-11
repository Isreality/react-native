import { StyleSheet, Pressable, PressableProps, StyleProp, ViewStyle, Text } from 'react-native'
import React from 'react'

interface ThemedButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  className?: string;
  text?: string;
}


export default function ThemedButton ({ style, className, text, ...props }: ThemedButtonProps) {
  return (  
      <Pressable 
        className={`bg-primary p-[15px] rounded-[5px] items-center justify-center active:opacity-80 ${className || ''}`}
        style={style} 
        {...props}
      >
        <Text className="text-buttonText">
          {text}
        </Text>
      </Pressable>    
  )
}
