import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import { commonStyles } from '@myapp/utilities/commonStyles'
import ProductCard, { Products } from '@myapp/components/ProductCard'
import makeRequest from '@myapp/utilities/makeRequest'
import { endPoints } from '@myapp/utilities/endPoints'
import { useToast } from '@myapp/hooks/useToast'
import { AxiosResponse } from "axios"
import { MainStackScreenProps } from '@myapp/routes/types'
import Loader from '@myapp/components/Loader'
import SearchModal from '@myapp/components/SearchModal'
import { Colors } from '@myapp/utilities/Colors'
import Spacing from '@myapp/components/Spacing'
import BottomSheet from '@myapp/components/BottomSheet'


interface ListScreenProps extends MainStackScreenProps { }

export default function ListScreen({ }: ListScreenProps) {
    const [products, setProducts] = useState<Products[]>([]);
    const [pageNo, setPageNo] = useState(1);
    let limit = 5
    const [loader, setLoader] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [filterModal, setFilterModal] = useState(false)

    const showToast = useToast();

    useEffect(() => {
        getProducts();
    }, [pageNo])

    const getProducts = async () => {
        try {
            setLoader(true);
            console.log("Page no ", pageNo)
            const response: AxiosResponse<Products[]> = await makeRequest(endPoints.products + "limit=" + pageNo * limit, "GET", {});
            console.log("List ", response.data)
            setProducts(response.data)
        } catch (error: any) {
            showToast(error.message, "danger");
        }
        setLoader(false)
    }

    return (
        <View style={[commonStyles.flexOne]}>
            <Loader show={loader} />
            <SearchModal show={searchModal} hide={() => setSearchModal(false)} />
            <BottomSheet show={filterModal} hide={() => setFilterModal(false)}>
                <View style={{ height: 300, backgroundColor: Colors.white, }} />
            </BottomSheet>
            <View style={[commonStyles.pA10, commonStyles.rowAlignCenter]}>
                <TouchableWithoutFeedback onPress={() => setSearchModal(true)}>
                    <View style={[styles.inputBox, commonStyles.flexOne]} />
                </TouchableWithoutFeedback>
                <Spacing size={5} />
                <TouchableWithoutFeedback onPress={() => setFilterModal(true)}>
                    <View style={[]}>
                        <View style={[styles.line]} />
                        <Spacing size={3} />
                        <View style={[styles.line, { width: "80%" }]} />
                        <Spacing size={3} />
                        <View style={[styles.line, { width: "60%" }]} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <FlatList
                data={products}
                renderItem={({ item }) => {
                    return <ProductCard {...item} />
                }}
                onEndReached={() => setPageNo(page => page + 1)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    justBetween: {
        justifyContent: "space-between",
    },
    line: {
        width: 25,
        height: 2,
        backgroundColor: Colors.black,
    },
    inputBox: {
        padding: 20,
        backgroundColor: Colors.white,
        borderRadius: 8,
    }
})