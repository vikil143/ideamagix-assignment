import { StyleSheet, Text, View, Modal, ActivityIndicator, ColorValue } from 'react-native'
import React from 'react'
import { commonStyles } from '@myapp/utilities/commonStyles';
import { Colors } from '@myapp/utilities/Colors';

interface LoaderProps {
    show: boolean;
    color?: ColorValue
}

export default function Loader({ show, color = Colors.black }: LoaderProps) {
    return (
        <Modal visible={show} transparent>
            <View style={[commonStyles.flexOne, commonStyles.center]}>
                <View style={[styles.box, commonStyles.center]}>
                    <ActivityIndicator color={color} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: Colors.white,
        padding: 15,
        borderRadius: 10,
    },
})