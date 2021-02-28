import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import bottomNavigation from './bottomNavigation'


const Stack = createStackNavigator()


const mainStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"main"} component={bottomNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default mainStack

const styles = StyleSheet.create({})
