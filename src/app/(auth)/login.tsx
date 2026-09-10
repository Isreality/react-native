

// export default Login

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//       justifyContent: 'center',
//   },
//   safeArea: {
//       flex: 1,
//       paddingHorizontal: Spacing.four,
//       alignItems: 'center',
//       gap: Spacing.three,
//       paddingBottom: BottomTabInset + Spacing.three,
//       maxWidth: MaxContentWidth,
//   },
//   title: {
//       textAlign: 'center',
//       fontSize: 20,
//       marginBottom: 10,
//   },
// })

import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
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
        
        <ThemedText type="title" className="text-center text-xl mb-2 text-text dark:text-text-dark font-bold">
          Login to your Account
        </ThemedText>

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

        <ThemedButton 
          onPress={handleSubmit}
          className="w-[80%] bg-primary py-3 rounded-xl items-center justify-center active:opacity-80"
        >
          <ThemedText className="text-text dark:text-text-dark font-semibold text-base">
            Log In
          </ThemedText>
        </ThemedButton>

                <ThemedButton onPress={handleSubmit}>
          {/* <ThemedText style={{ color: '#ffffff'}}> Log In</ThemedText> */}
          <ThemedText className='bg-primary'> Log In</ThemedText>
        </ThemedButton>

        <Link href="/register" asChild>        
          <Pressable className="mt-2">
            <ThemedText className="text-textSecondary dark:text-textSecondary-dark text-sm underline">
              Register Instead
            </ThemedText>
          </Pressable>
        </Link>

      </SafeAreaView>
    </ThemedView>
  );
};

export default Login;
