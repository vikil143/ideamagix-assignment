import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { commonStyles } from '@myapp/utilities/commonStyles'
import { Colors } from '@myapp/utilities/Colors'
import { MainStackScreenProps } from '@myapp/routes/types'
import { getAsyncToken } from '@myapp/utilities/asyncStroage'

interface SplashScreenProps extends MainStackScreenProps { }

export default function SplashScreen({ navigation }: SplashScreenProps) {
    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        setTimeout(async () => {
            try {
                const token = await getAsyncToken();
                if (token) {
                    navigation.replace("Home");
                } else {
                    navigation.replace("Login")
                }
            } catch (error) {
                navigation.replace("Login")
            }
        }, 3000)
    }

    return (
        <View style={[commonStyles.flexOne, commonStyles.center]}>
            <View style={[styles.box, commonStyles.center]}>
                <Text style={[commonStyles.whiteColor, styles.logo]}>Logo</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        fontSize: 20,
    },
    box: {
        width: 80,
        height: 80,
        backgroundColor: Colors.black,
        borderRadius: 8,
    },
})