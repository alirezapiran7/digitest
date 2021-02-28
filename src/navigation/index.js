import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import mainStack from './mainStack'
import authStack from './authStack'
import check from '../screens/check'


const Stack =  createStackNavigator();

export default function index() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={check}>
                <Stack.Screen name={"check"} component={check} options={{ headerShown: false }} />
                <Stack.Screen name={"main"} component={mainStack} options={{ headerShown: false }} />
                <Stack.Screen name={"auth"} component={authStack} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

