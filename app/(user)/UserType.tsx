import { View, Text, TouchableOpacity, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Options {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    iconType: "AntDesign" | "FontAwesome5"; // Added to differentiate icon libraries
}

const UserType = () => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const options: Options[] = [
        { id: "visitor", title: "Visitor", subtitle: "Temporary guest", icon: "user", iconType: "AntDesign" },
        { id: "recipient", title: "Recipient", subtitle: "Message receiving individual", icon: "hand-holding-medical", iconType: "FontAwesome5" },
        { id: "organization", title: "Organization", subtitle: "Structured business entity", icon: "building", iconType: "FontAwesome5" },
    ];

    const handleContinue = () => {
        if (selectedOption) {
            router.push(`/${selectedOption}`);
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
                <Text style={styles.title}>Let's get you started</Text>
                <Text style={styles.subtitle}>
                    As stated on your official ID. We need your date of birth to verify your identity.
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
                    onPress={() => setSelectedOption(option.id)}
                >
                    <View style={styles.iconTextContainer}>
                        <View style={[styles.iconDiv, selectedOption === option.id && styles.iconDivActive]}>
                            {option.iconType === "AntDesign" ? (
                                <AntDesign
                                    name={option.icon as any}
                                    size={24}
                                    color={selectedOption === option.id ? "#1B364F" : "#A0A0A0"}
                                />
                            ) : (
                                <FontAwesome5
                                    name={option.icon as any}
                                    size={24}
                                    color={selectedOption === option.id ? "#1B364F" : "#A0A0A0"}
                                />
                            )}
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
                    Continue
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

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
        fontSize: 14,
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
        marginHorizontal: "auto",
    },
    continueButtonActive: {
        backgroundColor: "#356C9D",
    },
    continueText: {
        fontSize: 20,
        fontWeight: "bold",
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
        alignItems: "center",
    },
    iconDivActive: {
        backgroundColor: "#BCCEDE",
    },
});

export default UserType;
