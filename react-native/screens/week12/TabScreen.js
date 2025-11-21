/* eslint-disable eol-last */
/* eslint-disable no-shadow */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator()

export default function TabScreen({ navigation, route }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color }) => {
                    let icon;
                    if (route.name === 'Home') {
                        icon = 'search';
                    }
                    else if (route.name === 'Details') {
                        icon = 'search';
                    }
                    return <Icon name={icon} color={color} size={focused ? 18 : 12} />
                },
            })}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Details' component={DetailsScreen} />
        </Tab.Navigator>
    )
}