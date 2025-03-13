import { Stack } from 'expo-router';

const vistorsforms = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="forms/FormScreen" />
            <Stack.Screen name="forms/FormVisitor" />
            <Stack.Screen name="forms/HomeAddress" />
            <Stack.Screen
                name="forms/ModalScreen"
                options={{ presentation: 'modal' }}
            />
            <Stack.Screen
                name="forms/ModalHour"
                options={{ presentation: 'modal' }}
            />

        </Stack>
    );
};

export default vistorsforms;
