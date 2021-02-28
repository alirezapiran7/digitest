import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import index from '../screens/auth'

const Stack = createStackNavigator();

const authStack = () => {
    return (
        <Stack.Navigator initialRouteName={"login"}>
            <Stack.Screen name={"login"} component={index} options={{ headerShown: false }} /> 
        </Stack.Navigator>
    )
}

export default authStack
