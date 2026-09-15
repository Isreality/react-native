import { View, Text, StyleSheet, TextInput, TextInputProps, useColorScheme } from 'react-native'
import React from 'react'

import { Colors } from '@/constants/theme';
// const { Colors } = require('./constants/colors');


interface ThemedTextInputProps extends TextInputProps {
  label?: string;
}

const ThemedTextInput: React.FC<ThemedTextInputProps> = ({ style, label, ...props }) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const placeholderColor = colorScheme === 'dark' ? '#666666' : '#c4c4c4';

  return (
    <View style={{ width: '100%', flexDirection: 'column', gap: 10 }}>
      
      {label && (
        <Text 
        style={{ 
          fontFamily: 'Satoshi-Medium', 
          fontSize: 14, 
          color: colors.text 
        }}
        >
          {label}
        </Text>
      )}
      
      <TextInput
        {...props}
        placeholderTextColor={placeholderColor}
        style={[
          {
            backgroundColor: colors.backgroundSelected,
            color: colors.text,
            padding: 20,
            borderRadius: 6,
          },
          style,
        ]}
      />
    </View>
  )
}

export default ThemedTextInput

const styles = StyleSheet.create({})
