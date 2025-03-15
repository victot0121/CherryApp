import {
    View, Text, StyleSheet, StatusBar, SafeAreaView,
    ScrollView, TouchableOpacity, Alert, Platform
} from 'react-native';
import React, { useState } from 'react';
import { useRouter, Link } from 'expo-router';
import CustomInput from '../../../Components/CustomInput';
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Recipient = () => {
    const router = useRouter();

    // State for input fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [sex, setSex] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Validation for enabling the Sign Up button
    const isFormValid =
        firstName && lastName && address && companyName && email && password && confirmPassword && password === confirmPassword;

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
                    label="Address"
                    placeholder="Enter your House Address"
                    value={address}
                    onChangeText={setAddress}
                />
                <CustomInput
                    label="Company Name"
                    placeholder="Enter Where You Work"
                    value={companyName}
                    onChangeText={setCompanyName}
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
                        Continue
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
                    <Text>Already have an account?  <Link href="../../(signIn)/siginPage"><Text style={styles.blueLink}>Sign In</Text></Link></Text>
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
        marginTop: 20,
        alignSelf: "center",
    },
    continueButtonActive: {
        backgroundColor: "#356C9D",
    },
    continueText: {
        fontSize: 15,
        fontWeight: "400",
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
    googleButton: { flexDirection: "row", alignItems: "center", padding: 10, width: "100%", justifyContent: "center" },
    googleText: { fontSize: 16, marginLeft: 10, color: "#333" },
    storeButtons: { flexDirection: "row", marginTop: 15, alignItems: "center", padding: 10, borderRadius: 30, width: "100%", justifyContent: "center" },
    storeButton: { marginHorizontal: 10, padding: 10, alignItems: "center", flexDirection: "row" },


});

export default Recipient