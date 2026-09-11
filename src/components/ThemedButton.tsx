import { StyleSheet, Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { ThemedText } from './themed-text';
import { Colors } from '@/constants/theme';
// import { cssInterop } from 'nativewind';

interface ThemedButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  className?: string;
  text?: string;
}

// cssInterop(Pressable, { className: 'style' });

export default function ThemedButton ({ style, className, text, ...props }: ThemedButtonProps) {
  return (  
      <Pressable 
        className={`bg-blue-500 p-[15px] rounded-[5px] items-center justify-center active:opacity-80 ${className || ''}`}
        style={style} 
        {...props}
      >
        <ThemedText className="text-text dark:text-text-dark font-semibold text-base">
          {text}
        </ThemedText>
      </Pressable>    
  )
}
