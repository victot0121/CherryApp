import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import NotificationHeader from "../../Components/NotificationHeader";

// Import local images
const Estate = require('../../assets/es3.jpeg');

const contacts = [
    { id: "1", name: "Alex Kim", phone: "+123 4567 6780", image: Estate },
    { id: "2", name: "John Doe", phone: "+123 4567 6780", image: Estate },
    { id: "3", name: "Sarah Sandal", phone: "+123 4567 6780", image: Estate },
    { id: "4", name: "Ethan Cap", phone: "+123 4567 6780", image: Estate },
    { id: "5", name: "Mic Andrew", phone: "+123 4567 6780", image: Estate },
    { id: "6", name: "Kindness Ross", phone: "+123 4567 6780", image: Estate },
];

export default function Contacts() {
    const [savedContacts, setSavedContacts] = useState<string[]>([]);

    const toggleSave = (id: string) => {
        setSavedContacts((prev) =>
            prev.includes(id) ? prev.filter((contactId) => contactId !== id) : [...prev, id]
        );
    };

    const renderItem = ({ item }: { item: (typeof contacts)[0] }) => (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Image source={item.image} style={styles.profileImage} />
                <TouchableOpacity onPress={() => toggleSave(item.id)}>
                    <FontAwesome name={savedContacts.includes(item.id) ? "heart" : "heart-o"} size={20} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.phone}>{item.phone}</Text>
            <Text style={styles.date}>Date: 12/08/2024</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#1B364F" />
            <NotificationHeader title="Contact" />

            {/* Header Tabs */}
            <View style={styles.tabContainer}>
                <Text style={styles.activeTab}>All Contacts</Text>
                <Text style={styles.inactiveTab}>Saved</Text>
            </View>

            {/* Contact List */}
            <FlatList
                data={contacts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={styles.listContent} // Ensures padding inside FlatList
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1, // Ensures the SafeAreaView takes the full height
        backgroundColor: "#F5F5F5",
        padding: 16,
    },
    tabContainer: {
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 16,
        marginBottom: 30,
        marginTop: 20
    },
    activeTab: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#356C9D",
        borderBottomWidth: 1,
        paddingBottom: 20
    },
    inactiveTab: {
        fontSize: 16,
        fontWeight: "bold",
        color: "gray",
    },
    columnWrapper: {
        justifyContent: "space-between",
    },
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
        width: "48%",
        marginBottom: 12,
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    profileImage: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 8,
    },
    phone: {
        fontSize: 14,
        color: "gray",
    },
    date: {
        fontSize: 12,
        color: "lightgray",
        marginTop: 4,
    },
    listContent: {
        paddingBottom: 20, // Prevents list from cutting off
    },
});
