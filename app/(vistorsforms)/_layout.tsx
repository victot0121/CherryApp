import { Stack } from 'expo-router';

const vistorsforms = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="forms/FormScreen" />
            <Stack.Screen name="forms/FormVisitor.tsx" />
        </Stack>
    );
};

export default vistorsforms;
