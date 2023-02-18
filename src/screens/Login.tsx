import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { commonStyles } from '@myapp/utilities/commonStyles'
import InputBox from '@myapp/components/InputBox'
import Spacing from '@myapp/components/Spacing'
import Button from '@myapp/components/Button'
import Label from '@myapp/components/Label'
import { MainStackScreenProps } from '@myapp/routes/types'
import { useToast } from '@myapp/hooks/useToast'
import makeRequest from '@myapp/utilities/makeRequest'
import { endPoint } from '@myapp/utilities/endPoints'

interface LoginScreenProps extends MainStackScreenProps { }

export default function LoginScreen({ navigation }: LoginScreenProps) {
    const showToast = useToast();
    const [state, setState] = useState({
        email: "mor_2314",
        password: "83r5^_"
    });

    const handleValidate = () => {
        let isValide = true;

        if (state.email === "") {
            isValide = false;
            showToast("Enter email id", "danger")
        }

        if (state.password === "") {
            isValide = false;
            showToast("Enter password", "danger")
        }

        return isValide
    }

    const onSubmit = async () => {
        const isValide = handleValidate();
        if (isValide) {
            try {
                const formData = {
                    username: state.email,
                    password: state.password
                }
                const response = await makeRequest(endPoint.login, "POST", formData)
                console.log("response ", response.data)
                navigation.navigate("Home")
            } catch (error: any) {
                showToast(error.message as string, "danger")
            }
        }
    }

    const onChangeValue = (name: string, value: string) => setState({ ...state, [name]: value });

    const goToGuest = () => navigation.navigate("Home");

    const goToRegister = () => navigation.navigate("Register")

    return (
        <View style={[commonStyles.flexOne, commonStyles.justifyCenter, commonStyles.pA15]}>
            <View>
                <Label>Email</Label>
                <Spacing size={5} />
                <InputBox name='email' value={state.email} onChangeValue={onChangeValue} />
            </View>
            <Spacing />
            <View>
                <Label>Password</Label>
                <Spacing size={5} />
                <InputBox name='password' value={state.password} onChangeValue={onChangeValue} />
            </View>
            <Spacing />
            <Button text='Login' onPress={onSubmit} />
            <Spacing />
            <View style={[commonStyles.rowBetween]}>
                <Text onPress={goToRegister}>Have a account?</Text>
                <Text onPress={goToGuest}>Guest Login</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})