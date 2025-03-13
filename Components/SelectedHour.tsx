// app/forms/SelectedHour.tsx
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useRouter, useLocalSearchParams } from 'expo-router';



interface SelectedHourProps {
    title: string;
    placeholder: string;
}

const SelectedHour: React.FC<SelectedHourProps> = ({ title, placeholder }) => {
    const router = useRouter();
    const { selectedTime } = useLocalSearchParams(); // Get selected time from ModalHour
    const [time, setTime] = useState(selectedTime || placeholder); // Maintain local state

    useEffect(() => {
        if (selectedTime) {
            setTime(selectedTime);
        }
    }, [selectedTime]);


    const openModal = () => {
        router.push({ pathname: 'forms/ModalHour', params: { prevTime: selectedTime || placeholder } });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                    editable={false}
                    value={time}
                />
                <View style={styles.buttons} >
                    <TouchableOpacity onPress={openModal}>
                        <AntDesign name="clockcircleo" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SelectedHour;

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",
        marginBottom: 16,
    },
    label: {
        position: "absolute",
        top: -10,
        left: 15,
        fontSize: 12,
        fontWeight: "bold",
        color: "#666",
        backgroundColor: "#F8F8F8",
        paddingHorizontal: 5,
        zIndex: 10,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F8F8F8",
        borderRadius: 8,
        paddingHorizontal: 12,
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        position: "relative",
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: "#000",
    },
    buttons: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
});

