import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="(stepOne)"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(auth)"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(user)"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(signIn)"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="homepage"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(notification)"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="(vistorsforms)"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    );
}

