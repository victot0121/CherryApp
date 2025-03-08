import { View, StatusBar, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import LanguageDropdown from '../../../Components/NotificationHeader';
import SearchComponent from '../../../Components/SearchComponent';
import CustomInput from '../../../Components/CustomInput';
import Pick from '../../../Components/Pick';


const FormVisitor = () => {
    const router = useRouter();

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [visit, setVisit] = useState('');
    const [ministry, setMinistry] = useState('');
    const [office, setOffice] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    return (
        <View style={styles.screen}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <LanguageDropdown showBack title="Pessi" />
            <SearchComponent />
            <ScrollView contentContainerStyle={styles.formContainer}>
                <Text style={styles.title}>Personal Information</Text>

                <CustomInput
                    label="First Name"
                    keyboardType="default"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChangeText={setFirstName}
                />

                <Pick
                    title="Mobile Number"
                    placeholder="Enter your phone number"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />

                <CustomInput
                    label="Email Address"
                    placeholder="Enter your Email Address"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <CustomInput
                    label="Purpose of Visit"
                    placeholder="Enter your Purpose of Visit"
                    value={visit}
                    onChangeText={setVisit}
                    keyboardType="default"
                />
                <CustomInput
                    label="Name of Organisation"
                    placeholder="Ministry of Education"
                    value={ministry}
                    onChangeText={setMinistry}
                    keyboardType="default"
                />
                <Pick
                    title="Office Number"
                    placeholder="Enter your Office Number"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
                <CustomInput
                    label="Name of Director"
                    placeholder="Name of Director"
                    value={office}
                    onChangeText={setOffice}
                    keyboardType="default"
                />

                {/* Submit Button */}
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

export default FormVisitor

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        paddingHorizontal: 16,
    },
    formContainer: {
        marginTop: 10,
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    submitButton: {
        backgroundColor: '#D0D0D0',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 60,
    },
    submitText: {
        fontSize: 16,
        color: '#000',
    },
})