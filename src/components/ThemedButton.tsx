import { StyleSheet, Pressable, PressableProps, StyleProp, ViewStyle, Text } from 'react-native'
import React from 'react'

interface ThemedButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  className?: string;
  text?: string;
}


const ThemedButton = ({ style, className, text, ...props }: ThemedButtonProps) => {
  return (  
      <Pressable 
        className={`bg-primary p-[12px] rounded-full w-full items-center justify-center active:opacity-80 ${className || ''}`}
        style={style} 
        {...props}
      >
        <Text className="font-satoshi-bold text-buttonText text-lg">
          {text}
        </Text>
      </Pressable>    
  )
}

// ThemedButton.displayName = 'ThemedButton';

export default ThemedButton;
