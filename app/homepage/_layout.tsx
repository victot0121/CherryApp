import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, useRouter } from 'expo-router';
import { View, StyleSheet, TouchableOpacity } from 'react-native'

export default function TabLayout() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Tabs screenOptions={{ tabBarInactiveTintColor: '#616D78', tabBarActiveTintColor: 'white', tabBarStyle: styles.tabBar, headerShown: false }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color }) => <FontAwesome size={20} name="home" color={color} />,
                    }}
                />

                <Tabs.Screen
                    name="schedule"
                    options={{
                        title: 'Schedule',
                        tabBarIcon: ({ color }) => <FontAwesome size={20} name="calendar" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="add"
                    options={{
                        tabBarLabel: "",
                        tabBarIcon: ({ color }) => (
                            <View style={styles.circleone}>
                                <TouchableOpacity
                                    onPress={() => (router.push('../homepage/add'))}
                                    activeOpacity={0.7}
                                >
                                    <View style={styles.circle}>
                                        <FontAwesome size={24} name="plus" color={color} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'profile',
                        tabBarIcon: ({ color }) => <FontAwesome size={20} name="user" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="contacts"
                    options={{
                        title: 'Contacts',
                        tabBarIcon: ({ color }) => <FontAwesome size={20} name="users" color={color} />,
                    }}
                />
            </Tabs>
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // zIndex: 99,
        zIndex: 30
    },
    tabBar: {
        height: 80,
        backgroundColor: "#1B364F",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderTopWidth: 0,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        zIndex: 9
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#356C9D',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#2D5BFF80',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 10,
        marginLeft: 20,
        position: 'absolute'
    },
    circleone: {
        width: 100,
        height: 120,
        backgroundColor: '#1B364F',
        borderRadius: 100,
        zIndex: -9,
    }
})