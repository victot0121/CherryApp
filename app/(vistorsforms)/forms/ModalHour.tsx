import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";


const timeSlots = [
    "07.00 AM", "07.30 AM", "08.00 AM", "08.30 AM", "09.00 AM", "09.30 AM", "10.00 AM", "10.30 AM", "11.00 AM", "11.30 AM", "12.00 PM",
    "12.30 PM", "13.00 PM", "13.30 PM", "14.00 PM", "14.30 PM", "15.00 PM", "15.30 PM", "16.00 PM", "16.30 PM", "17.00 PM", "17.30 PM",
    "18.00 PM", "18.30 PM", "19.00 PM", "19.30 PM", "20.00 PM", "20.30 PM", "21.00 PM", "21.30 PM", "22:00 PM", "22:30 PM", "23:00 PM"
];

const ModalHour = () => {
    const router = useRouter();
    const { prevTime } = useLocalSearchParams();

    const [selectedTime, setSelectedTime] = useState(prevTime || "12.00 PM");

    const handleConfirm = () => {
        router.replace({ pathname: "forms/homeAddress", params: { selectedTime } }); // Ensure correct redirection
    };

    return (
        <View style={styles.container}>
            <View style={styles.modalContent}>
                <FlatList
                    data={timeSlots}
                    numColumns={3}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.timeSlot,
                                selectedTime === item && styles.selectedTimeSlot,
                            ]}
                            onPress={() => setSelectedTime(item)}
                        >
                            <Text
                                style={[
                                    styles.timeText,
                                    selectedTime === item && styles.selectedTimeText,
                                ]}
                            >
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleConfirm}>
                        <Text style={styles.okText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ModalHour

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "100%",
        height: "80%",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    timeSlot: {
        width: 90,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
        margin: 8,
        backgroundColor: "#F8F8F8",
    },
    selectedTimeSlot: {
        backgroundColor: "#356C9D",
        borderColor: "#003366",
    },
    timeText: {
        fontSize: 16,
        color: "#000",
    },
    selectedTimeText: {
        color: "#fff",
        fontWeight: "bold",
    },
    footer: {
        flexDirection: "row",
        gap: 20,
        marginTop: 20,
        justifyContent: "flex-end",
    },
    cancelText: {
        fontSize: 16,
        color: "#356C9D",
    },
    okText: {
        fontSize: 16,
        color: "#356C9D",
    },
})
