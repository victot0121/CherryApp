import { View, Text, ScrollView, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import React from 'react';

const Subscription = () => {
    const router = useRouter();

    const plans = [
        { title: 'Free', price: '$00', interval: 'limited', features: 10 },
        { title: 'Advanced', price: '$99/', interval: 'limited', features: 10, month: "month" },
        { title: 'Advanced', price: '$120/', interval: 'limited', features: 10, month: "month" }
    ];

    const handleContinue = () => {
        router.push("homepage");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#F8F8F8" />
            <View style={styles.headerContainer}>
                <View>
                    <AntDesign name="arrowleft" size={24} color="black" onPress={() => router.back()} />
                </View>
                <Text style={styles.headerText}>Pricing</Text>
            </View>
            <View style={styles.titleContainer}>
                <View style={styles.titleCon}>
                    <Text style={styles.title}>Affordable pricing plans</Text>
                </View>
                <Text style={styles.subtitle}>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {plans.map((plan, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.planTitle}>{plan.title}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>{plan.price}</Text>
                            <Text style={styles.plan}>{plan.month}</Text>
                        </View>
                        <Text style={styles.interval}>{plan.interval}</Text>

                        {Array.from({ length: plan.features }).map((_, i) => (
                            <View key={i} style={styles.featureItem}>
                                <Text style={styles.featureText}>🟤 Fuga ipsam component</Text>
                            </View>
                        ))}

                        <TouchableOpacity style={styles.button} onPress={handleContinue}>
                            <Text style={styles.buttonText}>Schedule Appointment</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    headerContainer: {
        flexDirection: 'column',
        marginTop: 30,
        padding: 20,
    },
    headerText: {
        fontSize: 15,
        fontWeight: '400',
        textAlign: "center",
        color: "#616D78"
    },
    titleContainer: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    titleCon: {
        width: "50%",
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#123456',
        textAlign: "center",
        marginTop: 5,
    },
    subtitle: {
        marginTop: 10,
        color: "#616D78",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 10,
    },
    scrollContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    planTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: "#666",
    },
    plan: {
        fontSize: 14,
        color: '#666',
        marginTop: 20,
    },
    priceContainer: {
        flexDirection: 'row',
    },
    price: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#666',
    },
    interval: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    featureText: {
        fontSize: 14,
        color: '#666',
    },
    button: {
        backgroundColor: '#356C9D',
        borderRadius: 40,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },


});

export default Subscription;
