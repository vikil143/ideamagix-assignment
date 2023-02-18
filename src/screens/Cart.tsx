import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useToast } from '@myapp/hooks/useToast';
import ProductCard, { Products } from '@myapp/components/ProductCard';
import { AxiosResponse } from "axios"
import makeRequest from '@myapp/utilities/makeRequest';
import { endPoints } from '@myapp/utilities/endPoints';
import { commonStyles } from '@myapp/utilities/commonStyles';
import Loader from '@myapp/components/Loader';
import { MainStackScreenProps } from '@myapp/routes/types';

interface CartScreenProps extends MainStackScreenProps { }

export default function CartScreen({ }: CartScreenProps) {

    const [carts, setCarts] = useState<Products[]>([]);
    const [pageNo, setPageNo] = useState(1);
    let limit = 5
    const [loader, setLoader] = useState(false);

    const showToast = useToast();

    useEffect(() => {
        getCarts();
    }, [pageNo])

    const getCarts = async () => {
        try {
            setLoader(true);
            console.log("Page no ", pageNo)
            const response: AxiosResponse<Products[]> = await makeRequest(endPoints.carts + "limit=" + pageNo * limit, "GET", {});
            console.log("List ", response.data)
            setCarts(response.data)
        } catch (error: any) {
            showToast(error.message, "danger");
        }
        setLoader(false)
    }


    return (

        <View style={[commonStyles.flexOne]}>
            <Loader show={loader} />
            <FlatList
                data={carts}
                renderItem={({ item }) => {
                    return <ProductCard {...item} />
                }}
                onEndReached={() => setPageNo(page => page + 1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({})