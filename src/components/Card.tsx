import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles } from '@myapp/utilities/commonStyles'
import { ContainerViewStyles, hasChild } from '@myapp/types'

interface CardProps extends hasChild, Partial<ContainerViewStyles> { }

export default function Card({ children, containerStyle }: CardProps) {
    return (
        <View style={[
            commonStyles.mA10,
            commonStyles.whiteBackgroundColor,
            commonStyles.mV10,
            styles.container,
            containerStyle]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
})