import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles } from '@myapp/utilities/commonStyles'
import Card from '@myapp/components/Card'


interface ListScreenProps { }

export default function ListScreen({ }: ListScreenProps) {
    return (
        <View style={[commonStyles.flexOne, commonStyles.pA10]}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </View>
    )
}

const styles = StyleSheet.create({})