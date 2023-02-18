import { StyleSheet, Text, View, TextInput, TextInputProps } from 'react-native'
import React from 'react';

interface InputBoxProps extends TextInputProps {
    value: string;
    name: string;
    onChangeValue: (name: string, value: string) => void
}

export default function InputBox({ value, name, onChangeValue, ...props }: InputBoxProps) {
    return (
        <View style={[styles.container]}>
            <TextInput value={value} onChangeText={text => onChangeValue(name, text)} {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 8,
    },
})