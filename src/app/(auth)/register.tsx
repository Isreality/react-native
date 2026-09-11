import React, { useState } from 'react';
import { Pressable, View, Button, Text, useColorScheme } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import ThemedButton from '@/components/ThemedButton';
import ThemedTextInput from '@/components/ThemedTextInput';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const handleSubmit = () => {
    alert('Form submitted successfully');
  };

  return (
    <ThemedView className="flex-1 bg-background dark:bg-background-dark">
      <SafeAreaView className="flex-1 px-6 items-center gap-4 max-w-[900px] w-full mt-10">
        
        <Text className="font-satoshi-bold text-primary text-center text-2xl mb-2 text-text dark:text-text-dark">
          Create an Account
        </Text>

        <ThemedTextInput
          label="Email Address"
          placeholder="example@gmail.com"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ThemedTextInput
          label="Password"
          placeholder="Enter password"
          secureTextEntry 
          onChangeText={setPassword}
          value={password}
        />

        <ThemedButton onPress={handleSubmit} className="" text="Sign Up"/>
      
        <Text 
          style={{ 
              color: colors.text 
          }}
          className="font-satoshi-medium text-lg">
          Already have an account?{" "} 
          <Link href="/login" className='font-satoshi-bold text-primary'>Sign In</Link>
        </Text>
        

      </SafeAreaView>
    </ThemedView>
  );
};

export default Login;
