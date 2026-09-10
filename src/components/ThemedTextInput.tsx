import { StyleSheet, TextInput, TextInputProps, useColorScheme } from 'react-native'
import React from 'react'

import { Colors } from '@/constants/theme';
// const { Colors } = require('./constants/colors');


interface ThemedTextInputProps extends TextInputProps {
  // You can add custom props here if needed in the future
}

const ThemedTextInput: React.FC<ThemedTextInputProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <TextInput
      {...props}
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
  )
}

export default ThemedTextInput

const styles = StyleSheet.create({})
