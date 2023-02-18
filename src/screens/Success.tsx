import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MainStackScreenProps } from '@myapp/routes/types'
import { commonStyles } from '@myapp/utilities/commonStyles'
import Spacing from '@myapp/components/Spacing'
import Button from '@myapp/components/Button'

interface SuccessScreenProps extends MainStackScreenProps { }

export default function SuccessScreen({ navigation }: SuccessScreenProps) {
    return (
        <View style={[commonStyles.flexOne, commonStyles.justifyCenter]}>
            <View style={[commonStyles.center]}>
                <Text>You have been successfully register</Text>
                <Spacing />
                <Button text='Login' containerStyle={[styles.button]} onPress={() => navigation.popToTop()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "60%",
    }
})