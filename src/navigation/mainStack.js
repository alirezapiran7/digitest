import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import bottomNavigation from './bottomNavigation'
import search from '../screens/main/search'
import newMovie from '../screens/main/newMovie'
import newPerson from '../screens/main/newPerson'
import editMovie from '../screens/main/editMovie'
import editPerson from '../screens/main/editPerson'
import newCategory from '../screens/main/newCategory'


const Stack = createStackNavigator()


const mainStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"main"} component={bottomNavigation} options={{ headerShown: false }} />
            <Stack.Screen name={"newMovie"} component={newMovie} options={{ headerShown: false }} />
            <Stack.Screen name={"newPerson"} component={newPerson} options={{ headerShown: false }} />
            <Stack.Screen name={"editMovie"} component={editMovie} options={{ headerShown: false }} />
            <Stack.Screen name={"newCategory"} component={newCategory} options={{ headerShown: false }} />
            <Stack.Screen name={"editPerson"} component={editPerson} options={{ headerShown: false }} />
            
        </Stack.Navigator>
    )
}

export default mainStack

const styles = StyleSheet.create({})
