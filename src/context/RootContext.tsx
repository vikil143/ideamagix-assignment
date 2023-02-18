import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hasChild } from '@myapp/types'
import ToastWrapper from './Toast'


interface RootContextProps extends hasChild { }

export default function RootContext({ children }: RootContextProps) {
    return (
        <ToastWrapper>
            {children}
        </ToastWrapper>
    )
}

const styles = StyleSheet.create({})