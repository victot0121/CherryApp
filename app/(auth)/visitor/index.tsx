import {
    View, Text, StyleSheet, StatusBar, SafeAreaView,
    ScrollView, TouchableOpacity, Alert
} from 'react-native';
import React, { useState } from 'react';
import { useRouter, Link } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomInput from '../../../Components/CustomInput';

export default function Visitor() {
    const router = useRouter();

    // State for input fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Validation for enabling the Sign Up button
    const isFormValid =
        firstName && lastName && dateOfBirth && email && password && confirmPassword && password === confirmPassword;

    const handleContinue = () => {
        if (!isFormValid) {
            Alert.alert("Error", "Please fill in all fields correctly.");
            return;
        }
        console.log("Sign-Up Successful!");
        router.push("siginPage");
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
                <Text style={styles.title}>Account Set Up</Text>
                <Text style={styles.subtitle}>
                    As stated on your official ID. We need your date of birth to verify your identity.
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.formContainer}>
                {/* Input Fields */}
                <CustomInput
                    label="First Name"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <CustomInput
                    label="Last Name"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChangeText={setLastName}
                />
                <CustomInput
                    label="Date of Birth"
                    placeholder="Select date"
                    isDate
                    value={dateOfBirth}
                    onChangeText={setDateOfBirth}
                />
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
                <CustomInput
                    label="Confirm Password"
                    placeholder="Re-enter your password"
                    icon="lock-closed"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                {/* Sign Up Button */}
                <TouchableOpacity
                    style={[styles.continueButton, isFormValid && styles.continueButtonActive]}
                    disabled={!isFormValid}
                    onPress={handleContinue}
                >
                    <Text style={[styles.continueText, isFormValid && styles.continueTextActive]}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

                <View style={styles.SigninLinkContainer}>
                    <Text>Already have an account?  <Link href="../../(signIn)/siginPage"><Text style={styles.blueLink}>Sign In</Text></Link></Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
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
        fontSize: 14,
        color: "#fff",
        marginTop: 10,
    },
    formContainer: {
        paddingHorizontal: 20,
        paddingBottom: 50,
        marginTop: 7,
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
    SigninLinkContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    blueLink: {
        color: "#356C9D",
        fontWeight: "600",  // Make the link bold and underlined.
    }
});

