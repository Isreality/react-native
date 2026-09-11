import React, { useState } from 'react';
import { Pressable, View, Button, Text } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import ThemedButton from '@/components/ThemedButton';
import ThemedTextInput from '@/components/ThemedTextInput';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    alert('Form submitted successfully');
  };

  return (
    <ThemedView className="flex-1 justify-center bg-background dark:bg-background-dark">
      <SafeAreaView 
        className="flex-1 px-6 items-center gap-4 max-w-[800px] w-full mx-auto"
        style={{ paddingBottom: 50 + 16 }}
      >
        
        <Text className="text-satoshi-bold text-primary text-center text-3xl mb-2 text-text dark:text-text-dark font-bold">
          Login
        </Text>

        <ThemedTextInput
          className="w-[80%] mb-5"
          placeholder="example@gmail.com"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ThemedTextInput
          className="w-[80%] mb-5"
          placeholder="Enter password"
          secureTextEntry 
          onChangeText={setPassword}
          value={password}
        />

        <ThemedButton onPress={handleSubmit} className="" text="Login"/>

        <Link href="/register" asChild>        
          <Pressable className="mt-2">
            <ThemedText className="text-blue-500 text-textSecondary dark:text-textSecondary-dark text-sm">
              Register Instead
            </ThemedText>
          </Pressable>
        </Link>

      </SafeAreaView>
    </ThemedView>
  );
};

export default Login;
