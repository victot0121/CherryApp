import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, StatusBar } from "react-native";
import { useRouter } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import LanguageDropdown from '../Components/LanguageDropdown';


interface HeaderProps {
    title: string;
    showBack?: boolean;
}



const NotificationHeader = ({ title, showBack = false }) => {

    const router = useRouter();
    // const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
    const [isModalVisible, setModalVisible] = useState(false);


    const routernotification = () => {
        router.push('notificationScreen')
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            {/* Back Button */}
            {showBack && (
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableOpacity>
            )}

            {/* Title */}
            <Text style={styles.title}>{title}</Text>

            {/* Right Icons */}
            <View style={styles.iconsContainer}>
                <Ionicons name="search-outline" size={20} color="black" style={styles.icon} />
                <TouchableOpacity onPress={routernotification}>
                    <Ionicons name="notifications-outline" size={20} color="black" style={styles.icon} />
                </TouchableOpacity>

                {/* Language Selector */}
                <LanguageDropdown />


            </View>
        </View>
    )
}

export default NotificationHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        paddingTop: 50
    },
    backButton: {
        marginRight: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: "600",
        flex: 1,
    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginHorizontal: 8,
    },
    languageButton: {
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 5,
    },
})