import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar, ActivityIndicator, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LanguageDropdown from '../../../Components/NotificationHeader';
import { useRouter,  useLocalSearchParams } from 'expo-router';
import Logo from '../../../assets/profile.png'
import { Ionicons } from "@expo/vector-icons";
import NumberOfPeople from '../../../Components/NumberOfPeople';
import CustomInput from '../../../Components/CustomInput';
import DatePickerComponent from '../../../Components/DatePickerComponent';
import SelectedHour from '../../../Components/SelectedHour';




const HomeAddress = () => {
    const router = useRouter();
    const { selectedTime } = useLocalSearchParams();

    const [numPersons, setNumPersons] = useState("00");

    // Input states
    const [fullName, setFullName] = useState('');
   

    return (
        <View style={styles.container}>
            {/* Header */}
            <LanguageDropdown showBack />
            <View style={styles.profileSection}>
                <Image source={Logo} style={styles.profileImage} />
                <View>
                    <Text style={styles.profileName}>Alex Kim</Text>
                    <Text style={styles.profileEmail}>alexkim@gmail.com</Text>
                </View>
            </View>
            {/* Address Section */}
            <View style={styles.addressContainer}>
                <Text style={styles.addressTitle}>House Address</Text>
                <Text style={styles.addressText}>123 Main St, New York, NY 10004</Text>
            </View>
            {/* Form Section */}
            <Text style={styles.sectionTitle}>Schedule a visit</Text>
            <NumberOfPeople title='Number of Persons' />
            {/* Purpose of Visit */}
            <View style={styles.inputWrapper}>
                <CustomInput
                    label="Purpose of Visit"
                    keyboardType="default"
                    placeholder="Enter your Purpose of Visit"
                    value={fullName}
                    onChangeText={setFullName}
                />
            </View>
            <DatePickerComponent
                title="Select Date"
                placeholder="mm/dd/yy"
            />
            <SelectedHour
                title="Select Hour"
                placeholder={selectedTime || "m/hr"}
            />

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeAddress

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
    },
    profileSection: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 2,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: "bold",
    },
    profileEmail: {
        color: "#666",
    },
    addressContainer: {
        backgroundColor: "#B2C3B6",
        padding: 15,
        borderRadius: 8,
        margin: 20,
    },
    addressTitle: {
        fontWeight: "bold",
        marginBottom: 3,
    },
    addressText: {
        color: "#333",
    },
    sectionTitle: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    inputWrapper: {
        width: "90%",
        alignSelf: "center",
    },
    submitButton: {
        backgroundColor: '#D0D0D0',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 60,
        width: "90%",
        alignSelf: "center",
    },
    submitText: {
        fontSize: 16,
        color: '#000', 
    },

})
