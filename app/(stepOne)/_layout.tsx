import { Stack } from "expo-router";

export default function stepOne() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="second" />
            <Stack.Screen name="third" />
        </Stack>

    );
}