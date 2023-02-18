import { Modal, SafeAreaView, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { commonStyles } from '@myapp/utilities/commonStyles'
import { ContainerViewStyles, hasChild, ModalProps } from '@myapp/types';
import { Colors } from '@myapp/utilities/Colors';

interface BottomSheetProps
    extends ModalProps,
    hasChild,
    Partial<ContainerViewStyles> {
    takeHoleSpace?: boolean;
}


export default function BottomSheet({ show, hide, children, takeHoleSpace, containerStyle }: BottomSheetProps) {
    return (
        <Modal
            visible={show}
            transparent
            animationType="slide"
            onRequestClose={hide}>
            <SafeAreaView style={[commonStyles.flexOne]}>
                <TouchableWithoutFeedback onPress={hide}>
                    {!takeHoleSpace ? (
                        <View
                            style={[commonStyles.flexOne, styles.backdrop]}
                        />
                    ) : (
                        <View />
                    )}
                </TouchableWithoutFeedback>
                <View style={[styles.mainContainer, containerStyle]}>
                    {children}
                </View>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    mainContainer: {
        backgroundColor: Colors.white,
        borderTopStartRadius: 32,
        borderTopEndRadius: 32,
        elevation: 10,
    },
})