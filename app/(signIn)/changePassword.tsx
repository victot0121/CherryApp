import { View, Text, TouchableOpacity, StatusBar, ScrollView, StyleSheet, SafeAreaView,  Alert } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomInput from '../../Components/CustomInput';

const changePassword = () => {
    const router = useRouter()

    // State for input fields
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    

    // Validation for enabling the Sign Up button
    const isFormValid =
        password && confirmPassword && password === confirmPassword;

    const handleContinue = () => {
        if (!isFormValid) {
            Alert.alert("Error", "Please fill in all fields correctly.");
            return;
        }
        router.push("subscription");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#1B364F" />
            <View style={styles.container}>
                <Ionicons
                    name="chevron-back"
                    size={24}
                    color="white"
                    onPress={() => router.back()}
                />
                <Text style={styles.title}>Change Password</Text>
                <Text style={styles.subtitle}>
                    Update your password to enhance the security of your account
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.formContainer}>
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
                {/* Don’t have an account? */}
                <TouchableOpacity
                    style={[styles.continueButton, isFormValid && styles.continueButtonActive]}
                    disabled={!isFormValid}
                    onPress={handleContinue}
                >
                    <Text style={[styles.continueText, isFormValid && styles.continueTextActive]}>
                        Reset Password
                    </Text>
                </TouchableOpacity>
                <View style={styles.SigninLinkContainer}>
                    <Text>Don’t have an account? <Text onPress={() => router.push("UserType")} style={styles.blueLink}>Sign Up</Text></Text>
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
        marginBottom: 55,
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
        fontSize: 16,
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
    }

})

export default changePassword