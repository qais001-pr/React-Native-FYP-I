/* eslint-disable eol-last */
/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import { View, Text } from 'react-native'
import React from 'react'
import SignUp from './SignUp'
import Login from './Login'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TabScreen from './TabScreen'
const Stack = createStackNavigator()
export default function Auth() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='signup' component={SignUp} />
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='tabScreen' component={TabScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}