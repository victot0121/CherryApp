import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import NotificationHeader from "../../../Components/NotificationHeader";
import Feather from '@expo/vector-icons/Feather';


const approve = [
    {
        id: "1",
        sender: "Receptionist",
        title: "Alex Sandra",
        message: "Dear Visitor, you have exceeded your scheduled visit time. Please wrap up your visit and proceed to the exit.",
        status: "unread",
        image: require("../../../assets/Image12.png"),
        time: 'Sent at 9:00 AM'
    },
]

// Mock Notifications Data
const notifications = [
    {
        id: "1",
        sender: "Receptionist",
        title: "Hi Alex Sandra!",
        message: "Dear Visitor, you have exceeded your scheduled visit time. Please wrap up your visit and proceed to the exit. Thank you for your cooperation.",
        status: "unread",
        image: require("../../../assets/Image12.png"),
        time: 'Sent at 9:00 AM'
    },
    {
        id: "2",
        sender: "Security",
        title: "Urgent Security Update",
        message: "All visitors are advised to check in at the reception before entering the premises.",
        status: "read",
        image: require("../../../assets/Image13.png"),
        time: 'Sent at 9:00 AM'
    },
    {
        id: "3",
        sender: "John Doe",
        title: "Visit Request",
        message: "John Doe requested access to visit you with two accompanists.",
        status: "unread",
        actionable: true,
        image: require("../../../assets/Image13.png"),
        time: 'Sent at 9:00 AM'
    },
    {
        id: "4",
        sender: "Done you",
        title: "Done you",
        message: "Done you requested access to visit you with two accompanists.",
        status: "unread",
        actionable: true,
        image: require("../../../assets/Image13.png"),
        time: 'Sent at 9:00 AM'
    },
];

// Filter Options
const filterOptions = ["All", "Unread", "Read"];

const NotificationDetails = () => {
    const { id } = useLocalSearchParams();
    const [selectedFilter, setSelectedFilter] = useState("All");

    // Filter Notifications Based on Selected Tab
    const filteredNotifications = notifications.filter((notif) =>
        selectedFilter === "All" || notif.status === selectedFilter.toLowerCase()
    );

    return (
        <View style={styles.container}>
            <NotificationHeader title="Notifications" />

            {/* Segmented Control */}
            <View style={styles.segmentContainer}>
                {filterOptions.map((option) => (
                    <TouchableOpacity
                        key={option}
                        style={[styles.segmentButton, selectedFilter === option && styles.activeSegment]}
                        onPress={() => setSelectedFilter(option)}
                    >
                        <Feather name="circle" size={10} color="black" />
                        <Text style={[styles.segmentText, selectedFilter === option && styles.activeText]}>
                            {option}
                        </Text>

                    </TouchableOpacity>
                ))}
            </View>


            {approve.map((approveoption) => (
                <View
                    key={approveoption.id}
                    style={styles.approveContainer}
                >
                    <View style={styles.containerImage}>
                        <Image source={approveoption.image} />
                    </View>

                    <View style={styles.actionButtonsContainer}>
                        <View style={styles.approveoptiontitleContainer}>
                            <Text style={styles.approveoptiontitle}>{approveoption.title}</Text>
                            <Text style={styles.time}>{approveoption.time}</Text>
                        </View>
                        <Text>{approveoption.message}</Text>
                        {/* Approve/Decline Buttons for Actionable Notifications */}
                        <View style={styles.actionButtons}>
                            <TouchableOpacity style={styles.approveButton}>
                                <Text style={styles.buttonText}>Approve</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.declineButton}>
                                <Text style={styles.buttonTextRed}>Decline</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            ))}


            {/* Notification List */}
            <FlatList
                data={filteredNotifications}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.notificationCard}>
                        {/* <Text style={styles.sender}>{item.sender}</Text> */}
                        <View style={styles.notificationcontainerImage}>
                            <View style={styles.notificationImage}>
                                <Image source={item.image} />
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                            <Text style={styles.time}>{item.time}</Text>
                        </View>
                        <Text style={styles.message}>{item.message}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default NotificationDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
    },
    segmentContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10,
        backgroundColor: "#fff",
        padding: 5,
        borderBottomWidth: 1,
        borderColor: "#E5E5E5",
    },
    segmentButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 10,
    },
    activeSegment: {
        color: "#007bff",
    },
    segmentText: {
        fontSize: 14,
        color: "#616D78",
        marginTop: 10,
    },
    activeText: {
        color: "#356C9D",
        fontWeight: "bold",
    },
    approveoptiontitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    notificationCard: {
        backgroundColor: "#fff",
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    sender: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 5,
    },
    message: {
        fontSize: 14,
        color: "#555",
    },
    actionButtons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    approveButton: {
        backgroundColor: "#356C9D",
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    declineButton: {
        borderColor: "#356C9D",
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    buttonTextRed: {
        color: "#356C9D",
        fontWeight: "bold",
    },

    notificationcontainerImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    notificationImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 50,
    },
    title: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10
    },
    time: {
        fontSize: 12,
        color: '#555',
    },
    approveContainer: {
        flexDirection: 'row',
        marginBottom: 40,
        marginTop: 20
    },
    containerImage: {
        width: 50,
        height: 50,
    },
    actionButtonsContainer: {
        width: '70%',
        marginLeft: 10,
    },
    approveoptiontitleContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 10
    }
});