import { View, Text, TouchableOpacity, StatusBar, StyleSheet, SafeAreaView, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons';

interface options {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
}

const forgetPassword = () => {

    const router = useRouter()

    const [isVerified, setIsVerified] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null)

    const options: options[] = [
        { id: "sendviaemail", title: "Send via Email", subtitle: "Reset password via email.", icon: "mail" },
        { id: "sendviasms", title: "Send via SMS", subtitle: "Reset password via SMS.", icon: "mobile1" },
    ];



    const handleOptionSelect = (id: string) => {
        setSelectedOption(id);
    };

    const handleContinue = () => {
        if (selectedOption) {
            setIsVerified(true);
        }
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
                <Text style={styles.title}>Forgot Password?</Text>
                <Text style={styles.subtitle}>
                    Enter your email address or phone number that you use with your account to continue
                </Text>
            </View>



            {/* Options List */}
            {options.map((option) => (
                <TouchableOpacity
                    key={option.id}
                    style={[
                        styles.option,
                        selectedOption === option.id && styles.selectedOption,
                    ]}
                    onPress={() => handleOptionSelect(option.id)}
                >
                    <View style={styles.iconTextContainer}>
                        <View style={[styles.iconDiv, selectedOption === option.id && styles.iconDivActive]}>
                            <AntDesign
                                name={option.icon as any}
                                size={24}
                                color={selectedOption === option.id ? "#1B364F" : "#A0A0A0"}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.optionTitle}>{option.title}</Text>
                            <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
                        </View>
                    </View>
                    {selectedOption === option.id && <AntDesign name="checksquare" size={24} color="#1B364F" />}
                </TouchableOpacity>
            ))}

            {/* Continue Button */}
            <TouchableOpacity
                style={[
                    styles.continueButton,
                    selectedOption && styles.continueButtonActive,
                ]}
                disabled={!selectedOption}
                onPress={handleContinue}
            >
                <Text
                    style={[
                        styles.continueText,
                        selectedOption && styles.continueTextActive,
                    ]}
                >
                    Reset Password
                </Text>
            </TouchableOpacity>



            {/* Verification Success Modal */}
            <Modal visible={isVerified} transparent animationType="fade">
                <View style={styles.modalContainer}>
                    
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Code Sent!</Text>
                        <Text style={styles.modalText}>We’ve sent the password to john***@gmail.com</Text>
                        <TouchableOpacity
                            style={styles.proceedButton}
                            onPress={
                                () => {
                                    setIsVerified(false);
                                    router.push("changePassword");
                                }
                            }
                        >
                            <Text style={styles.proceedText}>Proceed  {"-->"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    option: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        borderRadius: 25,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#E0E0E0",
        marginBottom: 20,
        marginHorizontal: "auto",

        // Shadow for iOS
        shadowColor: "#356C9D",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        // Shadow for Android
        elevation: 12,
    },
    selectedOption: {
        borderColor: "#1B364F",
    },
    iconTextContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    textContainer: {
        marginLeft: 20,
    },
    optionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1B364F",
    },
    optionSubtitle: {
        fontSize: 12,
        color: "#6D6D6D",
    },
    continueButton: {
        width: "80%",
        padding: 15,
        borderRadius: 40,
        backgroundColor: "#D3D3D3",
        alignItems: "center",
        marginTop: 30,
        marginHorizontal: "auto"
    },
    continueButtonActive: {
        backgroundColor: "#356C9D",
    },
    continueText: {
        fontSize: 15,
        fontWeight: "300",
        color: "#6D6D6D",
    },
    continueTextActive: {
        color: "#FFFFFF",
    },
    iconDiv: {
        width: 40,
        height: 40,
        borderRadius: 13,
        backgroundColor: "#F2F5F9",
        justifyContent: "center",
        alignItems: "center"
    },
    iconDivActive: {
        backgroundColor: "#BCCEDE",
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 270,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 40,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 14,
        marginBottom: 20,
    },
    proceedButton: {
        // backgroundColor: '#4A90E2',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    proceedText: {
        color: 'black',
        fontSize: 16,
    },

})

export default forgetPassword 