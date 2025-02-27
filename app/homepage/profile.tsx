import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRouter, Link } from 'expo-router';
import Profile from '../../assets/profile.png'


// Menu Data
const menuItems = [
    { label: 'Edit Profile', icon: 'person-outline' },
    { label: 'Favorite', icon: 'heart-outline' },
    { label: 'Settings', icon: 'settings-outline' },
    { label: 'Help and Support', icon: 'help-circle-outline' },
    { label: 'Terms and Conditions', icon: 'document-text-outline' },
];



export default function profile() {
    const [name, setName] = useState('John Doe');
    const [phone, setPhone] = useState('+123 456 7890');
    const [email, setEmail] = useState('johndoe@gmail.com');
    const router = useRouter();

    const routernotification = () => {
        router.push('notificationScreen')
      }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <StatusBar backgroundColor="#fff" barStyle="dark-content" /> */}
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>My Profile</Text>
                <View style={styles.headerIcons}>
                    <TouchableOpacity>
                        <Feather name="search" size={22} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconSpacing}  onPress={routernotification}>
                        <Ionicons name="notifications-outline" size={22} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Profile Section */}
            <View style={styles.profileContainer}>
                <Image source={Profile} style={styles.profileImage} />
                <Text style={styles.profileName}>{name}</Text>
                <Text style={styles.profilePhone}>{phone}</Text>
                <Text style={styles.profileEmail}>{email}</Text>
            </View>

            {/* Menu List */}
            <View style={styles.menuContainer}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.menuItem}>
                        <View style={styles.menuLeft}>
                            <Ionicons name={item.icon} size={22} color="#333" />
                            <Text style={styles.menuText}>{item.label}</Text>
                        </View>
                        <Ionicons name="chevron-forward-outline" size={20} color="#999" />
                    </TouchableOpacity>
                ))}
            </View>

            {/* Log Out */}
            <TouchableOpacity style={styles.logoutButton}>
                <Ionicons name="log-out-outline" size={22} color="#999" />
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#F9FAFC",
        paddingBottom: 200,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 50,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    headerIcons: {
        flexDirection: "row",
    },
    iconSpacing: {
        marginLeft: 15,
    },
    profileContainer: {
        alignItems: "center",
        marginVertical: 20,
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 50,
    },
    profileName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginTop: 10,
    },
    profilePhone: {
        fontSize: 14,
        color: "#555",
        marginTop: 5,
    },
    profileEmail: {
        fontSize: 14,
        color: "#777",
        marginTop: 3,
    },
    menuContainer: {
        marginHorizontal: 20,
        borderRadius: 12,
        paddingVertical: 5,

    },
    menuItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    menuLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    menuText: {
        fontSize: 16,
        color: "#333",
        marginLeft: 15,
    },
    logoutButton: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 20,
        paddingLeft: 40,
    },
    logoutText: {
        fontSize: 16,
        marginLeft: 30,
    },
});
