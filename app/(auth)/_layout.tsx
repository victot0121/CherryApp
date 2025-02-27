import { Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="visitor" />
            <Stack.Screen name="organization" />
            <Stack.Screen name="recipient" />
            <Stack.Screen name="sendviaemail" />
            <Stack.Screen name="sendviasms" />
        </Stack>
    );
}