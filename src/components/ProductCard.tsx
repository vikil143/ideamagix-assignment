import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Card from './Card'
import Button from './Button'
import Spacing from './Spacing'
import { commonStyles } from '@myapp/utilities/commonStyles'
import makeRequest from '@myapp/utilities/makeRequest'
import { endPoints } from '@myapp/utilities/endPoints'


export interface Products {
    image: string;
    title: string;
    category: string;
    price: string;
}

export default function ProductCard({ image, title, category, price }: Products) {

    const addToCart = async () => {
        // const response = await makeRequest(endPoints.)
    }

    return (
        <Card>
            <View style={[styles.container]}>
                <Image style={[styles.image]} source={{ uri: image }} />
                <View style={[commonStyles.pA10]}>
                    <Text style={[styles.title]}>{title}</Text>
                    <Spacing size={2} />
                    <View style={[commonStyles.rowBetween]}>
                        <Text style={[styles.category]}>{category}</Text>
                        <Spacing size={2} />
                        <Text>Rs: {price}</Text>
                    </View>
                </View>
                <View style={[commonStyles.pA10]}>
                    <Button containerStyle={[styles.button]} text='Add Cart' onPress={addToCart} />
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    category: {
        fontSize: 14,
    },
    title: {
        fontSize: 18,
    },
    image: {
        width: "100%",
        height: 200,
    },
    button: {
        padding: 10,
    },
    container: {}
})