import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

interface CustomInputProps {
    label: string;
    placeholder: string;
    icon?: string;
    secureTextEntry?: boolean;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
    isDate?: boolean;
    value: string;
    onChangeText: (text: string) => void;
    error?: string;
    isValid: boolean;
    showValidation: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
    label,
    placeholder,
    icon,
    secureTextEntry,
    keyboardType = "default",
    isDate = false,
    value,
    onChangeText,
    error,
    isValid,
    showValidation,
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [formattedDate, setFormattedDate] = useState("");

    const onChange = (event: any, selectedDate?: Date) => {
        if (selectedDate) {
            setShowPicker(Platform.OS === "ios");
            setDate(selectedDate);
            setFormattedDate(selectedDate.toLocaleDateString());
            onChangeText(selectedDate.toISOString());
        } else {
            setShowPicker(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={[styles.inputContainer, showValidation && isValid && styles.inputValid, showValidation && !isValid && styles.inputError]}>
                <Text style={[styles.label, showValidation && isValid && { color: "gray" }]}>
                    {label}
                </Text>
                {icon && <Ionicons name={icon} size={20} color="#666" style={styles.icon} />}
                {isDate ? (
                    <>
                        <TouchableOpacity onPress={() => setShowPicker(true)} style={[styles.input, styles.dateInput]}>
                            <Text style={{ color: formattedDate ? "#333" : "#999" }}>
                                {formattedDate || placeholder}
                            </Text>
                        </TouchableOpacity>
                        {showPicker && (
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display="default"
                                onChange={onChange}
                            />
                        )}
                    </>
                ) : (
                    <TextInput
                        placeholder={placeholder}
                        placeholderTextColor="#999"
                        secureTextEntry={isPasswordVisible}
                        keyboardType={keyboardType}
                        value={value}
                        onChangeText={onChangeText}
                        style={[styles.input, icon ? { paddingLeft: 40 } : {}]}
                    />
                )}
                {secureTextEntry && (
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} style={styles.eyeIcon}>
                        <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={20} color="#666" />
                    </TouchableOpacity>
                )}
            </View>
            {showValidation && !isValid && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginBottom: 10,
    },
    inputContainer: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingTop: 10,
        height: 57,
        backgroundColor: "#f9f9f9",
        justifyContent: "center",
        marginBottom: 10,
    },
    inputValid: {
        borderColor: "gray",
    },
    inputError: {
        borderColor: "red",
    },
    label: {
        position: "absolute",
        bottom: 50,
        left: 15,
        fontSize: 12,
        fontWeight: "bold",
        color: "#666",
        backgroundColor: "#f9f9f9",
        paddingHorizontal: 5,
    },
    input: {
        fontSize: 16,
        color: "#333",
    },
    icon: {
        position: "absolute",
        left: 10,
        top: 20,
    },
    eyeIcon: {
        position: "absolute",
        right: 10,
        top: 20,
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: 5,
    },
});

export default CustomInput;
