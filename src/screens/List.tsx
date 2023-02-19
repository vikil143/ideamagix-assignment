import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
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
import FilterModal, { FilterApply } from '@myapp/components/FilterModal'

type Type = "" | "Sort" | "Filter"

interface ListScreenProps extends MainStackScreenProps { }

export default function ListScreen({ }: ListScreenProps) {
    const [products, setProducts] = useState<Products[]>([]);
    const [pageNo, setPageNo] = useState(1);
    let limit = 5
    const [loader, setLoader] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [filterModal, setFilterModal] = useState(false);
    const type = useRef<Type>("")
    const typeAscending = useRef<boolean>(false);
    const typeFilter = useRef("")

    const showToast = useToast();

    useEffect(() => {
        if (type.current === "") {
            getProducts();
        } else if (type.current === "Sort") {
            onSort(typeAscending.current)
        } else {
            onFilter(typeFilter.current)
        }

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

    const onSort = async (isAccending: boolean) => {
        try {
            setLoader(true);
            // console.log("Page no ", isAccending)
            const response: AxiosResponse<Products[]> = await makeRequest(`${endPoints.products}sort="${isAccending ? "asc" : "desc"}"`, "GET", {});
            // console.log("List ", response.data)
            setProducts(response.data)
        } catch (error: any) {
            showToast(error.message, "danger");
        }
        setLoader(false)
    }

    const onFilter = async (category: string) => {
        try {
            setLoader(true);
            // console.log("Page no ", isAccending)
            const response: AxiosResponse<Products[]> = await makeRequest(`${category === "" ? endPoints.products : endPoints.productWithCatgory + category}`,
                "GET", {});
            // console.log("List ", response.data)
            setProducts(response.data)
        } catch (error: any) {
            showToast(error.message, "danger");
        }
        setLoader(false)
    }

    const onApply = (item: FilterApply) => {
        if (item.type === "Sort") {
            type.current = "Sort"
            typeAscending.current = item.accending
            onSort(item.accending)
        }
        else {
            type.current = "Filter"
            if (item.category === "") {
                type.current = ""
            }
            typeFilter.current = item.category
            onFilter(item.category)
        }
    }

    return (
        <View style={[commonStyles.flexOne]}>
            <Loader show={loader} />
            <SearchModal show={searchModal} hide={() => setSearchModal(false)} />
            <BottomSheet show={filterModal}
                takeHoleSpace
                containerStyle={[commonStyles.flexOne]}
                hide={() => {
                    type.current = ""
                    setFilterModal(false)
                }}>
                <FilterModal onApply={onApply} />
            </BottomSheet>
            <View style={[commonStyles.pA10, commonStyles.rowAlignCenter]}>
                <TouchableWithoutFeedback onPress={() => setSearchModal(true)}>
                    <View style={[styles.inputBox, commonStyles.flexOne]}>
                        <Text>Search</Text>
                    </View>
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
        padding: 10,
        backgroundColor: Colors.white,
        borderRadius: 8,
    }
})