import { StyleSheet, Pressable, PressableProps, StyleProp, ViewStyle, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/theme';
import { ThemedText } from './themed-text';

interface ThemedButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  className?: string;
  text?: string;
}


const ThemedButton = ({ style, className, text, ...props }: ThemedButtonProps) => {
  const systemScheme = useColorScheme();
  const scheme = systemScheme === 'dark' ? 'dark' : 'light';
  const colors = Colors[scheme];
  
  return (  
      <Pressable 
        className={`bg-primary p-3 rounded-full w-full items-center justify-center active:opacity-80 ${className || ''}`} 
        {...props}
      >
        <Text 
          className={`font-satoshi-bold text-base text-bxt dark:text-text-dark  ${className || ''}`} 
          // style={{ color: colors.buttonText, fontFamily: 'Satoshi-Medium', fontSize: 18, padding: 10 }}
        >
            
          {text}
        </Text>
      </Pressable>    
  )
}

// ThemedButton.displayName = 'ThemedButton';

export default ThemedButton;
