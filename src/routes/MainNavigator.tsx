import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import { Image } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, StackHeaderProps } from "@react-navigation/stack"
import { MainScreens } from './types';
import LoginScreen from '@myapp/screens/Login';
import ListScreen from '@myapp/screens/List';
import RegisterScreen from '@myapp/screens/Register';
import SuccessScreen from '@myapp/screens/Success';
import { Colors } from '@myapp/utilities/Colors';
import Spacing from '@myapp/components/Spacing';
import { commonStyles } from '@myapp/utilities/commonStyles';
import CartScreen from '@myapp/screens/Cart';

const ListHeader = (props: StackHeaderProps) => {
    return (
        <View style={[styles.listHeader]}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Image style={[styles.backArrow]} source={require("../assests/icons/backArrow.png")} />
            </TouchableOpacity>
            <Spacing size={5} />
            <Text style={[commonStyles.flexOne]}>Home</Text>
            <Spacing size={5} />
            <TouchableOpacity onPress={() => props.navigation.navigate("Cart")}>
                <Image style={[styles.backArrow]} source={require("../assests/icons/cart.png")} />
            </TouchableOpacity>
        </View>
    )
}

const MainStack = createStackNavigator<MainScreens>()

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name="Login" component={LoginScreen} />
                <MainStack.Screen name="Home" options={{ header: ListHeader }} component={ListScreen} />
                <MainStack.Screen name="Register" component={RegisterScreen} />
                <MainStack.Screen name="Success" component={SuccessScreen} />
                <MainStack.Screen name="Cart" component={CartScreen} />
            </MainStack.Navigator>
        </NavigationContainer >
    )
}

const styles = StyleSheet.create({
    backArrow: {
        width: 25,
        height: 25,
    },
    listHeader: {
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
        padding: 10,
        backgroundColor: Colors.white,
        flexDirection: "row",
        alignItems: "center",
    },
})