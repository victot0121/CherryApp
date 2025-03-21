import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Fontisto from '@expo/vector-icons/Fontisto';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from "expo-router";

interface DatePickerComponentsProps {
    title: string;
    placeholder: string;
}

const DatePickerComponent: React.FC<DatePickerComponentsProps> = ({ title, placeholder }) => {
    const router = useRouter();
    const params = useLocalSearchParams();

    const [selectedDate, setSelectedDate] = useState<string>("");

    const openModal = () => {
        router.push({ pathname: "forms/ModalScreen" });
    };

    React.useEffect(() => {
        if (params.confirmed === "true" && params.start && params.end) {
            setSelectedDate(`${params.start} - ${params.end}`);
        }
    }, [params.start, params.end, params.confirmed]);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    keyboardType="default"
                    editable={false}
                    placeholder={selectedDate || placeholder}
                />
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={openModal}>
                        <Fontisto name="date" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default DatePickerComponent;

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
