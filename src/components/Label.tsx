

import { StyleSheet, Text, TextStyle } from 'react-native';
import React from 'react';
import { Colors } from '@myapp/utilities/Colors';

interface LabelProps {
    required?: boolean;
    requiredStyle?: TextStyle;
    style?: TextStyle;
    children: string;
}

export default function Label({
    children,
    required,
    requiredStyle,
    style,
}: LabelProps) {
    return (
        <Text style={[styles.container, style]}>
            {children}
            {'  '}
            {required && <Text style={[styles.required, requiredStyle]}>*</Text>}
        </Text>
    );
}

const styles = StyleSheet.create({
    required: {
        color: Colors.red,
    },
    container: {
        fontSize: 16,
        textAlign: 'left',
    },
});