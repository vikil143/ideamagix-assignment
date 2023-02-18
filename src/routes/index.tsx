import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from "@react-navigation/native"

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <View>
                <Text>Navigation</Text>
            </View>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})