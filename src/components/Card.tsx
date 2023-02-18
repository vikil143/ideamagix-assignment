import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles } from '@myapp/utilities/commonStyles'

export default function Card() {
    return (
        <View style={[commonStyles.shadowNormal, commonStyles.whiteBackgroundColor, commonStyles.mV5, styles.container]}>
            <Text>Card</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})