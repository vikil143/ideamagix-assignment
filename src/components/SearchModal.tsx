import { StyleSheet, Text, View, TextInput, Modal, TouchableOpacity, Image, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { commonStyles } from '@myapp/utilities/commonStyles';
import { Colors } from '@myapp/utilities/Colors';
import Spacing from './Spacing';
import Loader from './Loader';
import { useToast } from '@myapp/hooks/useToast';
import ProductCard, { Products } from './ProductCard';
import { endPoints } from '@myapp/utilities/endPoints';
import { AxiosResponse } from "axios"
import makeRequest from '@myapp/utilities/makeRequest';

interface SearchModalProps {
    show: boolean;
    hide: () => void
}


export default function SearchModal({ show, hide }: SearchModalProps) {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState<Products[]>([]);
    const [pageNo, setPageNo] = useState(1);
    let limit = 5
    const [loader, setLoader] = useState(false);

    const showToast = useToast();

    const searchForProduct = async () => {
        try {
            setLoader(true);
            console.log("Page no ", pageNo)
            const response: AxiosResponse<Products[]> = await makeRequest(endPoints.products, "GET", {});
            const responseProduct = response.data;
            console.log("response search", responseProduct)
            const result = responseProduct.filter((item) => item.category.indexOf(search) > -1 || item.title.indexOf(search) > -1)
            setProducts(result);
            setLoader(false)
        } catch (error: any) {
            showToast(error.message, "danger");
            setLoader(false)
        }
    }

    const onSearch = (text: string) => setSearch(text);

    useEffect(() => {
        setTimeout(() => {
            searchForProduct()
        }, 200)
    }, [search])


    // const searchRef = useRef<React.LegacyRef<TextInput> | undefined>(undefined);

    // useEffect(() => {
    //     setTimeout(() => {
    //         searchRef.current?.focus();
    //     }, 200)
    // }, [])


    return (
        <Modal visible={show} animationType="slide" onRequestClose={hide}>
            <View style={[commonStyles.flexOne, styles.container]}>
                <View style={[commonStyles.pA10, commonStyles.rowAlignCenter]}>
                    <TouchableOpacity onPress={hide}>
                        <Image style={[styles.backArrow]} source={require("../assests/icons/backArrow.png")} />
                    </TouchableOpacity>
                    <Spacing size={5} />
                    <TextInput
                        // ref={searchRef}
                        style={[styles.inputBox, commonStyles.shadowNormal, commonStyles.flexOne]}
                        placeholder="Search"
                        onChangeText={onSearch}
                    />
                </View>
                <View style={[commonStyles.flexOne]}>
                    <FlatList
                        data={products}
                        renderItem={({ item }) => {
                            return <ProductCard {...item} />
                        }}
                        onEndReached={() => setPageNo(page => page + 1)}
                    />
                </View>
                {loader && (
                    <View style={[commonStyles.flexOne, StyleSheet.absoluteFillObject, commonStyles.center]}>
                        <View style={[styles.box, commonStyles.center]}>
                            <ActivityIndicator color={Colors.black} />
                        </View>
                    </View>
                )}
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
    backArrow: {
        width: 25,
        height: 25,
    },
    inputBox: {
        padding: 10,
        backgroundColor: Colors.white,
        borderRadius: 5,
    },
    container: {
        backgroundColor: "#fafafa",
        flex: 1,
    }
})