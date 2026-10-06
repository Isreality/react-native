import { View, Text, StyleSheet, TextInput, TextInputProps, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/theme';


interface ThemedTextInputProps extends TextInputProps {
  label?: string;
}

const ThemedTextInput: React.FC<ThemedTextInputProps> = ({ style, label, ...props }) => {
  const systemScheme = useColorScheme();
  const scheme = systemScheme === 'dark' ? 'dark' : 'light';
  const colors = Colors[scheme];
  const placeholderColor = systemScheme === 'dark' ? '#666666' : '#c4c4c4';

  return (
    <View style={{ width: '100%', flexDirection: 'column', gap: 10, marginBottom: 15 }}>
      
      {label && (
        <Text 
        style={{ 
          fontFamily: 'Satoshi-Medium', 
          fontSize: 16, 
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
