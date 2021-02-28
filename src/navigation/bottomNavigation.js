
import React from 'react'
import { Platform, StyleSheet,} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { strings, metrics } from '../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabBarIcon, TabBarText } from '../components/BottomTabItem';
import movies from '../screens/main/movies'
import persons from '../screens/main/persons'




const Tab = createBottomTabNavigator();
const PayScreenComponent = () => {
    return null
}

const bottomNavigation = ({ navigation }) => {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator initialRouteName={"movies"}>

            <Tab.Screen name={"movies"} component={movies}
                options={{
                    tabBarLabel: ({ focused }) => <TabBarText focused={focused} title="movies" />,
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="movies" />,
                }}
            />

            <Tab.Screen name={"persons"} component={persons}
                options={{
                    tabBarLabel: ({ focused }) => <TabBarText focused={focused} title="persons" />,
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="persons" />,
                }}
            />
        </Tab.Navigator>
    )
}

export default bottomNavigation
