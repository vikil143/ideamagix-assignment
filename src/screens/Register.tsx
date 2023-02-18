import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { commonStyles } from '@myapp/utilities/commonStyles'
import InputBox from '@myapp/components/InputBox'
import Label from '@myapp/components/Label'
import Spacing from '@myapp/components/Spacing'
import Button from '@myapp/components/Button'

export default function RegisterScreen() {

    const [state, setState] = useState({
        email: 'John@gmail.com',
        username: 'johnd',
        password: 'm38rmF$',
        name: {
            firstname: 'John',
            lastname: 'Doe'
        },
        address: {
            city: 'kilcoole',
            street: '7835 new road',
            number: "3",
            zipcode: '12926-3874',
            geolocation: {
                lat: '-37.3159',
                long: '81.1496'
            }
        },
        phone: '1-570-236-7033'
    })

    const onChangeValue = (name: string, value: string) => setState({ ...state, [name]: value });

    /* 
        below code is done because of fast development please ignore 
        added because of adding default values
    */
    const onNestedChangeName = (name: string, value: string) => {
        setState({ ...state, name: { ...state.name, [name]: value } })
    }

    const onNestedChangeAddress = (name: string, value: string) => {
        setState({ ...state, address: { ...state.address, [name]: value } })
    }

    return (
        <ScrollView style={[commonStyles.flexOne, commonStyles.pA10]}>
            <View>
                <Label>Email Id</Label>
                <InputBox name='email'
                    value={state.email}
                    onChangeValue={onChangeValue} />
            </View>
            <Spacing />
            <View>
                <Label>
                    User name
                </Label>
                <InputBox name="username"
                    value={state.username}
                    onChangeValue={onChangeValue} />
            </View>
            <Spacing />
            <View>
                <Label>
                    Password
                </Label>
                <InputBox name='password'
                    value={state.password}
                    onChangeValue={onChangeValue} />
            </View>
            <Spacing />
            <View style={[commonStyles.row]}>
                <View style={[commonStyles.flexOne]}>
                    <Label>
                        First Name
                    </Label>
                    <InputBox name='firstname'
                        value={state.name.firstname}
                        onChangeValue={onNestedChangeName} />
                </View>
                <Spacing size={5} />
                <View style={[commonStyles.flexOne]}>
                    <Label>
                        Last Name
                    </Label>
                    <InputBox name='lastname'
                        value={state.name.lastname}
                        onChangeValue={onNestedChangeName} />
                </View>
            </View>
            <Spacing />
            <View>
                <Label>Address</Label>
                <View>
                    <InputBox name='city'
                        value={state.address.city}
                        onChangeValue={onNestedChangeAddress}
                        placeholder="City" />
                    <Spacing size={5} />
                    <InputBox name='street'
                        value={state.address.street}
                        onChangeValue={onNestedChangeAddress}
                        placeholder="Street" />
                    <Spacing size={5} />
                    <InputBox name='number'
                        value={state.address.number}
                        onChangeValue={onNestedChangeAddress}
                        placeholder="Number"
                        keyboardType="number-pad" />
                    <Spacing size={5} />
                    <InputBox name='zipcode'
                        value={state.address.zipcode}
                        onChangeValue={onNestedChangeAddress}
                        keyboardType="number-pad"
                        placeholder="Zipcode" />
                </View>
            </View>
            <Spacing />
            <View>
                <Label>Phone</Label>
                <InputBox name='phone'
                    value={state.phone}
                    keyboardType="number-pad"
                    onChangeValue={onChangeValue} />
            </View>
            <Spacing />
            <Button text='Submit' onPress={() => { }} />
            <Spacing />
        </ScrollView>
    )
}

const styles = StyleSheet.create({})