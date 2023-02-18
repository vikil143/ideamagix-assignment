import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface SpacingProps {
    size?: number
}

export default function Spacing({ size = 10 }: SpacingProps) {
    return (
        <View style={{ padding: size }}>
        </View>
    )
}

const styles = StyleSheet.create({})