import React, { useState } from 'react';
import { Pressable, View, Button, Text, useColorScheme, Keyboard, TouchableOpacity, Alert } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/theme';
// import { Iconify } from '@huymobile/react-native-iconify';
import { Eye, EyeOff } from 'lucide-react-native';
import { useAuth } from '@/context/AuthProvider';
import { useRouter } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import ThemedButton from '@/components/ThemedButton';
import ThemedTextInput from '@/components/ThemedTextInput';


const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordSecure, setIsConfirmPasswordSecure] = useState(true);
  const router = useRouter();

  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const { signUp } = useAuth() || {};

  const handleSubmit = async () => {
    if (!name || !email || !phone || !password || !confirmPassword) {
      Alert.alert('Please fill in all fields');
      return;
    }

    // Validate Email Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      Alert.alert('Validation Error', 'Please enter a valid email address');
      return;
    }

    // Validate Nigerian 11-digit Phone Number (Starts with 070, 080, 090, 081, 091, 071, etc.)
    const nigerianPhoneRegex = /^0[789][01]\d{8}$/;
    if (!nigerianPhoneRegex.test(phone.trim())) {
      Alert.alert('Validation Error', 'Please enter a valid 11-digit Nigerian phone number starting with 070, 080, 090, etc.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }
    

    try {
      await signUp(name, email.trim(), phone.trim(), password, confirmPassword);
      router.replace('/home');
      Alert.alert('Success', 'Account created successfully!', [
        { text: 'OK', onPress: () => router.replace('/(tabs)/home') }
      ]);
    } catch (error: any) {
      Alert.alert('Sign Up Error', error?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <ThemedView className="flex-1 bg-background dark:bg-background-dark">
      <KeyboardAwareScrollView 
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        extraScrollHeight={20} // Adds comfortable spacing above the keyboard
        keyboardShouldPersistTaps="handled"
      >
        <Pressable className="flex-1" onPress={Keyboard.dismiss}>
          <SafeAreaView className="flex-1 px-6 items-center gap-4 max-w-[900px] w-full mt-10">
            <Text className="font-satoshi-bold text-primary text-center text-2xl mb-2">
              Create an Account
            </Text>
            
            {/* Name */}
            <ThemedTextInput
              label="Full Name"
              placeholder="John Doe"
              onChangeText={setName}
              value={name}
            />

            {/* Email */}
            <ThemedTextInput
              label="Email Address"
              placeholder="example@gmail.com"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />

            {/* Phone */}
            <ThemedTextInput
              label="Phone Number"
              placeholder="08012345678"
              keyboardType="phone-pad"
              maxLength={11}
              onChangeText={setPhone}
              value={phone}
            />


            {/* Password Wrapper */}
            <View className="w-full relative">
              <ThemedTextInput
                label="Password"
                placeholder="Enter password"
                secureTextEntry={isPasswordSecure} 
                onChangeText={setPassword}
                value={password}
              />
              <TouchableOpacity
                style={{ position: 'absolute', right: 16, bottom: 14 }}
                onPress={() => setIsPasswordSecure(!isPasswordSecure)}
              >
                {/* <Iconify
                  icon={isPasswordSecure ? 'mdi:eye-off' : 'mdi:eye'}
                  size={22}
                  color="#808080"
                /> */}
                {isPasswordSecure ? (
                  <EyeOff stroke="#808080" size={22} />
                ) : (
                  <Eye stroke="#808080" size={22} />
                )}
              </TouchableOpacity>
            </View>

            {/* Confirm Password Wrapper */}
            <View className="w-full relative">
              <ThemedTextInput
                label="Confirm Password"
                placeholder="Confirm password"
                secureTextEntry={isConfirmPasswordSecure}  
                onChangeText={setConfirmPassword}
                value={confirmPassword}
              />
              <TouchableOpacity
                style={{ position: 'absolute', right: 16, bottom: 14 }}
                onPress={() => setIsConfirmPasswordSecure(!isConfirmPasswordSecure)}
              >
                {/* <Iconify
                  icon={isConfirmPasswordSecure ? 'mdi:eye-off' : 'mdi:eye'}
                  size={22}
                  color="#808080"
                /> */}
                {isPasswordSecure ? (
                  <EyeOff stroke="#808080" size={22} />
                ) : (
                  <Eye stroke="#808080" size={22} />
                )}
              </TouchableOpacity>
            </View>

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
        </Pressable>
      </KeyboardAwareScrollView>
      
      
    </ThemedView>
  );
};

export default Login;
