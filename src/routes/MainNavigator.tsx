import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { MainScreens } from './types';
import LoginScreen from '@myapp/screens/Login';
import ListScreen from '@myapp/screens/List';
import RegisterScreen from '@myapp/screens/Register';

const MainStack = createStackNavigator<MainScreens>()

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name="Login" component={LoginScreen} />
                <MainStack.Screen name="Home" component={ListScreen} />
                <MainStack.Screen name="Register" component={RegisterScreen} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})