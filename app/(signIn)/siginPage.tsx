import {
  View, Text, StyleSheet, StatusBar, SafeAreaView,
  ScrollView, TouchableOpacity, Alert, Platform
} from 'react-native';
import React, { useState } from 'react';
import { useRouter, Link } from 'expo-router';
import CustomInput from '../../Components/CustomInput';
import { AntDesign, Ionicons } from "@expo/vector-icons";


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

      <ScrollView contentContainerStyle={styles.formContainer}  >
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


        {/* Play Store / App Store Button */}
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.text}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* Google Sign In Button */}
        <TouchableOpacity style={styles.googleButton}>
          <AntDesign name="google" size={20} color="#EA4335" />
          <Text style={styles.googleText}>Sign in with Google</Text>
        </TouchableOpacity>

        {/* Store Button (Play Store for Android, App Store for iOS) */}
        <View style={styles.storeButtons}>
          {Platform.OS === "android" ? (
            <TouchableOpacity style={styles.storeButton}>
              <Ionicons name="logo-google-playstore" size={30} color="#000" />
              <Text style={styles.googleText}>Sign in with playstore</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.storeButton}>
              <Ionicons name="logo-apple" size={30} color="#000" />
              <Text style={styles.googleText}>Sign in with apple</Text>
            </TouchableOpacity>
          )}
        </View>

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
    paddingBottom: 100,
    marginTop: 60,
  },
  continueButton: {
    width: "100%",
    padding: 10,
    borderRadius: 40,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    marginTop: 10,
    alignSelf: "center",
  },
  continueButtonActive: {
    backgroundColor: "#356C9D",
  },
  continueText: {
    fontSize: 18,
    fontWeight: "400",
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
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D1D5DB', // Equivalent to bg-gray-300
  },
  text: {
    marginHorizontal: 8, // Equivalent to mx-2
    color: '#6B7280', // Equivalent to text-gray-500
  },
  googleButton: { flexDirection: "row", alignItems: "center", padding: 10,   width: "100%", justifyContent: "center" },
  googleText: { fontSize: 16, marginLeft: 10, color: "#333" },
  storeButtons: { flexDirection: "row", marginTop: 15, alignItems: "center",  padding: 10, borderRadius: 30,  width: "100%", justifyContent: "center" },
  storeButton: { marginHorizontal: 10, padding: 10,  alignItems: "center" , flexDirection: "row"},
});

export default siginPage