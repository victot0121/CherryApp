import { Stack } from "expo-router";


const Notificationlayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="notificationScreen" />
            <Stack.Screen name="notifications/[id]" />
        </Stack>
    )
}

export default Notificationlayout 