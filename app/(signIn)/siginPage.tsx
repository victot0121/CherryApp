import {
  View, Text, StyleSheet, StatusBar, SafeAreaView,
  ScrollView, TouchableOpacity, Alert
} from 'react-native';
import React, { useState } from 'react';
import { useRouter, Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomInput from '../../Components/CustomInput';

const siginPage = () => {

  const router = useRouter();

  // State for input fields

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Validation for enabling the Sign Up button
  const isFormValid =
    email && password;

  const handleContinue = () => {
    if (!isFormValid) {
      Alert.alert("Error", "Please fill in all fields correctly.");
      return;
    }
    router.push("faceScanScreen");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Ionicons
          name="chevron-back"
          size={24}
          color="white"
          onPress={() => router.back()}
        />
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
          Enter the email address that you used to sign up to Receptionist
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.formContainer}>
        {/* Input Fields */}
        <CustomInput
          label="Email Address"
          placeholder="Enter your email"
          keyboardType="email-address"
          icon="mail-outline"
          value={email}
          onChangeText={setEmail}
        />
        <CustomInput
          label="Password"
          placeholder="Enter your password"
          icon="lock-closed"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.forgetLinkContainer}>
          <Text><Text onPress={() => router.push("forgetPassword")} style={styles.blueLink}>Forgot password? </Text></Text>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity
          style={[styles.continueButton, isFormValid && styles.continueButtonActive]}
          disabled={!isFormValid}
          onPress={handleContinue}
        >
          <Text style={[styles.continueText, isFormValid && styles.continueTextActive]}>
            Sign In
          </Text>
        </TouchableOpacity>
        <View style={styles.SigninLinkContainer}>
          <Text>Don’t have an account?<Text onPress={() => router.push("UserType")} style={styles.blueLink}>Sign Up </Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  container: {
    padding: 20,
    height: 230,
    backgroundColor: "#1B364F",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    justifyContent: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 12,
  },
  subtitle: {
    fontSize: 15,
    color: "#fff",
    marginTop: 10,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 50,
    marginTop: 60,
  },
  continueButton: {
    width: "100%",
    padding: 15,
    borderRadius: 40,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    marginTop: 30,
    alignSelf: "center",
  },
  continueButtonActive: {
    backgroundColor: "#356C9D",
  },
  continueText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#6D6D6D",
  },
  continueTextActive: {
    color: "#FFFFFF",
  },
  forgetLinkContainer: {
    marginTop: 8,
    marginBottom: 4,
    width: "100%",
    alignItems: "flex-end",
  },
  SigninLinkContainer: {
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
  blueLink: {
    color: "#356C9D",
    fontWeight: "600",
    marginLeft: 50,
  }
});

export default siginPage