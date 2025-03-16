import { Stack } from "expo-router";

export default function AuthLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="siginPage" />
            <Stack.Screen name="faceScanScreen" />
            <Stack.Screen name="changePassword" />
            <Stack.Screen name="forgetPassword" />
            <Stack.Screen name="subscription" />
            <Stack.Screen name="enterTokenScreen" />
        </Stack>
    );
}