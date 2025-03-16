import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const EnterTokenScreen = () => {
    const router = useRouter();
    const [token, setToken] = useState(['', '', '', '']);
    const inputRefs = useRef([]);

    const handleChange = (text, index) => {
        if (/^\d?$/.test(text)) {
            const newToken = [...token];
            newToken[index] = text;
            setToken(newToken);

            if (text && index < 3) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleBackspace = (text, index) => {
        if (!text && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleContinue = () => {
        if (token.includes('')) {
            Alert.alert('Error', 'Please enter the full 4-digit token.');
            return;
        }
        const enteredToken = token.join('');
        Alert.alert('Success', `Token entered: ${enteredToken}`);
        router.push('changePassword');
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1B364F" />
            {/* <Text style={styles.title}></Text> */}
            <View style={styles.oncontainer}>
                <Ionicons
                    name="chevron-back"
                    size={24}
                    color="white"
                    onPress={() => router.back()}
                />
                <Text style={styles.titletwo}>Enter Token</Text>
                <Text style={styles.subtitle}>
                    Enter the Token that you receive in your Email to continue
                </Text>
            </View>
            <View style={styles.inputContainer}>
                {token.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (inputRefs.current[index] = ref)}
                        style={styles.input}
                        keyboardType="number-pad"
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace') {
                                handleBackspace(digit, index);
                            }
                        }}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

export default EnterTokenScreen;

const styles = StyleSheet.create({
    oncontainer: {
        padding: 20,
        height: 230,
        backgroundColor: "#1B364F",
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        justifyContent: "center",
        marginBottom: 55,
    },
    titletwo: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 12,
    },
    subtitle: {
        fontSize: 15,
        color: "#fff",
        marginTop: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    input: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 22,
        marginHorizontal: 10
    },
    button: {
        backgroundColor: '#356C9D',
        padding: 12,
        borderRadius: 20,
        marginTop: 60,
        width: 150,
        alignSelf: 'center',

    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
    },
});
