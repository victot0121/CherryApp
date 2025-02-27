import { Stack } from "expo-router";
import { View, Text } from 'react-native'
import React from 'react'

export default function typeOfUser(){
  return (
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="UserType"/>
    </Stack>
  )
}

 