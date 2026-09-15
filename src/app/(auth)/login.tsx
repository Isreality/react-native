import React, { useState } from 'react';
import { Pressable, View, Button, Text, useColorScheme, Keyboard, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
// import { Iconify } from '@huymobile/react-native-iconify';
import { Eye, EyeOff } from 'lucide-react-native';

import { useAuth } from '@/context/AuthProvider';
import { useRouter } from 'expo-router';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import ThemedButton from '@/components/ThemedButton';
import ThemedTextInput from '@/components/ThemedTextInput';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const router = useRouter();


  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const { signIn } = useAuth() || {};

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert('Please fill in all fields');
      return;
    }

    try {
      await signIn(email, password);
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error signing in. Please try again.');
    }
  };

  return (
    <ThemedView className="flex-1 bg-background dark:bg-background-dark">
      <Pressable className="flex-1" onPress={Keyboard.dismiss}>
        <SafeAreaView className="flex-1 px-6 items-center gap-4 max-w-[900px] w-full mt-10">
          <Text className="font-satoshi-bold text-primary text-center text-2xl mb-2">
            Sign In
          </Text>

          <ThemedTextInput
            label="Email Address"
            placeholder="example@gmail.com"
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}
          />


          {/* Password */}
          <ThemedTextInput
            label="Password"
            placeholder="Enter password"
            secureTextEntry={isPasswordSecure} 
            onChangeText={setPassword}
            value={password}
          />

          {/* Iconify Toggle Button */}
          <TouchableOpacity
            style={{ position: 'absolute', right: 40, top: 210 }}
            onPress={() => setIsPasswordSecure(!isPasswordSecure)}
          >
            {/* <Iconify
              icon={isPasswordSecure ? 'mdi:eye-off' : 'mdi:eye'}
              size={24}
              color="#808080"
            /> */}
            {isPasswordSecure ? (
              <EyeOff stroke="#808080" size={22} />
            ) : (
              <Eye stroke="#808080" size={22} />
            )}
          </TouchableOpacity>

          <ThemedButton onPress={handleSubmit} className="" text="Login"/>
        
          <Text 
            style={{ 
              color: colors.text 
            }} 
            className="font-satoshi-medium text-lg">
            Don't have an account?{" "} 
            <Link href="/register" className='font-satoshi-bold text-primary'>Create Account</Link>
          </Text>
          

        </SafeAreaView>
      </Pressable>
      
    </ThemedView>
  );
};

export default Login;
