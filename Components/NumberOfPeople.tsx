import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface NumberOfPeopleProps {
    title: string;
}

const NumberOfPeople: React.FC<NumberOfPeopleProps> = ({ title }) => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={count.toString()}
                    keyboardType="numeric"
                    editable={false}
                />
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={() => setCount((prev) => Math.max(prev + 1, 1))}>
                        <Ionicons name="chevron-up" size={18} color="#333" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCount((prev) => Math.max(prev - 1, 1))}>
                        <Ionicons name="chevron-down" size={18} color="#333" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default NumberOfPeople

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
})