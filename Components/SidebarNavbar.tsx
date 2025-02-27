import { View, Text, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'expo-router'



const SidebarNavbar = ({ show , setShow }) => {
    const router = useRouter()
    

    const slideAnim = useRef(new Animated.Value(-300)).current; // Start off-screen
    const fadeAnim = useRef(new Animated.Value(0)).current; // Start invisible

    useEffect(() => {
        if (show) {
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: 0, // Move to position 0 (visible)
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1, // Fully visible
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        } else {
            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: -300, // Move off-screen
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0, // Fade out
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }, [show]);

    if (!show) return null; // Don't render if not shown

    return (
        <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
            <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
                {/* Header Section */}
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => setShow(false)}>
                        <Image source={require('../assets/container4.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <Image source={require('../assets/Logo3.png')} style={styles.logo} />
                </View>

                {/* Menu Items */}
                <View style={styles.menuItems}>
                    {['Registered Companies', 'Estates', 'Settings', 'Help & Support'].map((item, index) => (
                        <TouchableOpacity key={index} style={styles.menuItem}>
                            <Text style={styles.menuText}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Plans Button */}
                <TouchableOpacity style={styles.plansButton} onPress={() => router.push("subscription")}>
                    <Text style={styles.plansButtonText} >Plans</Text>
                </TouchableOpacity>
            </Animated.View>
        </Animated.View>
    );
};

export default SidebarNavbar;

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        zIndex: 100, 
    },
    menu: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%", 
        height: "100%", 
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        borderBottomColor: "#ddd",
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    icon: {
        width: 50,
        height: 50,
        tintColor: "#333",
    },
    logo: {
        width: 30,
        height: 30,
    },
    menuItems: {
        marginTop: 120,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 70
        // flex: 1,
    },
    menuItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    menuText: {
        fontSize: 16,
        color: "#333",
    },
    plansButton: {
        marginTop: 10,
        backgroundColor: "#2D669A",
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: "center",
    },
    plansButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
