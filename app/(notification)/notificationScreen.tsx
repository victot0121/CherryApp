import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import dayjs from "dayjs";
import BackgroundImage from "../../assets/Home2.png";
import AntDesign from '@expo/vector-icons/AntDesign';

const notifications = [
    {
        id: "1",
        sender: "Receptionist",
        title: "Hi Alex Sandra!",
        message: "Dear Visitor, you have exceeded your scheduled visit time. Please wrap up your visit and proceed to the exit. Thank you for your cooperation."
    },
    {
        id: "2",
        sender: "Security",
        title: "Urgent Security Update",
        message: "All visitors are advised to check in at the reception before entering the premises."
    }
];

const NotificationScreen = () => {
    const router = useRouter();
    const [currentTime, setCurrentTime] = useState("");
    const [currentDay, setCurrentDay] = useState("");
    const [currentMonth, setCurrentMonth] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = dayjs();
            setCurrentTime(now.format("h:mm A"));
            setCurrentDay(now.format("dddd"));
            setCurrentMonth(now.format("MMMM D"));
        };

        updateTime();
        const timer = setInterval(updateTime, 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <ImageBackground source={BackgroundImage} style={styles.background}>
            <StatusBar backgroundColor="transparent" barStyle="light-content" />

            <View style={styles.overlay}>
                <Text style={styles.time}>{currentTime}</Text>
                <View style={styles.textContainer}>
                    <Text style={styles.day}>{currentDay}</Text>
                    <Text style={styles.month}>{currentMonth}</Text>
                </View>

                <ScrollView contentContainerStyle={styles.notificationsContainer}>
                    {notifications.map((notification) => (
                        <TouchableOpacity
                            key={notification.id}
                            style={styles.notificationBox}
                            onPress={() => router.push(`/notifications/${notification.id}`)}
                        >
                            <View style={styles.senderContainer}>
                                <View style={styles.senderContent}>
                                    <View style={styles.ImageContent}>
                                        <Image
                                            source={require('../../assets/Logo3.png')}
                                            resizeMode="contain"
                                            style={styles.image}
                                        />
                                        <Text style={styles.sender}>{notification.sender}</Text>
                                    </View>
                                    <Text>now</Text>
                                </View>
                                <AntDesign name="down" size={10} color="black" />
                            </View>
                            <Text style={styles.notificationTitle}>{notification.title}</Text>
                            <Text style={styles.notificationMessage}>{notification.message}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </ImageBackground>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    background: { flex: 1, resizeMode: "cover", justifyContent: "center" },
    overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0, 0, 0, 0.5)", paddingTop: 150, alignItems: 'center' },
    textContainer: { flexDirection: 'row', gap: 4 },
    time: { fontSize: 48, color: "#fff", fontWeight: "200" },
    day: { fontSize: 14, color: "#ddd" },
    month: { fontSize: 14, color: "#bbb", marginLeft: 7 },
    notificationsContainer: { paddingVertical: 20, alignItems: "center" },
    notificationBox: { backgroundColor: "#FFFFFF", padding: 15, width: "85%", borderRadius: 12, marginTop: 20 },
    sender: { fontWeight: "bold", color: "#007bff", marginBottom: 5 },
    notificationTitle: { fontWeight: "bold", fontSize: 16 },
    notificationMessage: { color: "#555", marginTop: 5 },
    senderContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
    ImageContent: { flexDirection: 'row', gap: 9 },
    senderContent: { flexDirection: 'row', marginLeft: 10, gap: 20 },
    image: { width: 14, height: 14 },
});
