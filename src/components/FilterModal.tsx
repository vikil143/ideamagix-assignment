import {
    Image, StyleSheet, Text, FlatList,
    TouchableOpacity, View, Dimensions,
    TouchableWithoutFeedback, ScrollView
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors } from '@myapp/utilities/Colors'
import { commonStyles } from '@myapp/utilities/commonStyles'
import Spacing from './Spacing'
import Button from './Button'
import CheckBox from './CheckBox'
import { AxiosResponse } from 'axios'
import makeRequest from '@myapp/utilities/makeRequest'
import { endPoints } from '@myapp/utilities/endPoints'

const { width } = Dimensions.get("screen")

type Type = "Sort" | "Filter";

export interface FilterApply {
    type: Type;
    accending: boolean;
    category: string;
}

interface FilterModalProps {
    hide?: () => void;
    onApply: (item: FilterApply) => void;
}

export default function FilterModal({ hide, onApply }: FilterModalProps) {
    const [tabs, setTabs] = useState(1)
    const [accending, setAccending] = useState(false);

    const [cateogry, setCategory] = useState<string[]>([])

    const [selectedCategory, setSelectedCategory] = useState("")

    useEffect(() => {
        getCateogy();
    }, [])

    const getCateogy = async () => {
        try {
            const response: AxiosResponse<string[]> = await makeRequest(endPoints.catgoryAll, "GET", {});
            console.log("respn", response.data);
            setCategory(response.data);
        } catch (error) {

        }
    }

    return (
        <View style={[styles.container]}>
            <View style={[commonStyles.rowAlignCenter, commonStyles.pA15]}>
                <TouchableOpacity onPress={hide}>
                    <Image style={[styles.backArrow]} source={require("../assests/icons/backArrow.png")} />
                </TouchableOpacity>
                <Spacing />
                {/* <Text>Filter </Text> */}
            </View>
            <View style={[commonStyles.row, commonStyles.flexOne]}>
                {/* Side bar */}
                <View style={[styles.sideBar]}>
                    <TouchableWithoutFeedback onPress={() => setTabs(1)}>
                        <View style={[styles.tab, commonStyles.rowAlignCenter, { backgroundColor: tabs === 1 ? "#f3f3f3" : Colors.white, }]}>
                            <Text>Sort By</Text>
                            <Spacing size={5} />
                            {
                                tabs === 1 && (
                                    <View style={{ width: 5, height: 5, backgroundColor: Colors.black }} />
                                )
                            }
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => setTabs(2)}>
                        <View style={[styles.tab, commonStyles.rowAlignCenter, { backgroundColor: tabs === 2 ? "#f3f3f3" : Colors.white, }]}>
                            <Text>Filter</Text>
                            <Spacing size={5} />
                            {
                                tabs === 2 && (
                                    <View style={{ width: 5, height: 5, backgroundColor: Colors.black }} />
                                )
                            }
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={[styles.mainBar]}>
                    <ScrollView style={[commonStyles.scrollContainerStyle]}>
                        {tabs === 1 ? (
                            <View style={[commonStyles.flexOne]}>
                                <TouchableOpacity onPress={() => setAccending(true)}>
                                    <View style={[commonStyles.pA15, commonStyles.rowAlignCenter]}>
                                        <View pointerEvents="none">
                                            <CheckBox selected={accending} onPress={() => { }} />
                                        </View>
                                        <Spacing size={5} />
                                        <Text>Accending</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setAccending(false)}>
                                    <View style={[commonStyles.pA15, commonStyles.rowAlignCenter]}>
                                        <View pointerEvents="none">
                                            <CheckBox selected={!accending} onPress={() => { }} />
                                        </View>
                                        <Spacing size={5} />
                                        <Text>Descending</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={[commonStyles.flexOne]}>
                                <FlatList
                                    data={cateogry}
                                    ListHeaderComponent={() => {
                                        return (
                                            <TouchableOpacity onPress={() => setSelectedCategory("")}>
                                                <View style={[commonStyles.pA15, commonStyles.rowAlignCenter]}>
                                                    <View pointerEvents="none">
                                                        <CheckBox selected={selectedCategory === ""} onPress={() => { }} />
                                                    </View>
                                                    <Spacing size={5} />
                                                    <Text>All</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }}
                                    renderItem={({ item, }) => {
                                        return (
                                            <TouchableOpacity onPress={() => setSelectedCategory(item)}>
                                                <View style={[commonStyles.pA15, commonStyles.rowAlignCenter]}>
                                                    <View pointerEvents="none">
                                                        <CheckBox selected={selectedCategory === item} onPress={() => { }} />
                                                    </View>
                                                    <Spacing size={5} />
                                                    <Text>{item}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }} />
                            </View>
                        )}
                    </ScrollView>
                </View>
            </View>

            <View style={[commonStyles.pA10, commonStyles.row]}>
                <Button text='Cancel'
                    containerStyle={[commonStyles.flexOne, styles.cancelButton]}
                    textStyle={styles.cancelButtonText}
                    onPress={hide!} />
                <Spacing />
                <Button text='Apply'
                    containerStyle={[commonStyles.flexOne]}
                    onPress={() => {
                        hide!();
                        onApply({
                            type: tabs === 1 ? "Sort" : "Filter", accending,
                            category: selectedCategory
                        })
                    }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cancelButtonText: {
        color: Colors.black,
    },
    cancelButton: {
        backgroundColor: Colors.white,
    },
    tab: {
        padding: 15,
    },
    mainBar: {
        flex: 1,
    },
    sideBar: {
        width: width * 0.35,
        backgroundColor: Colors.white,
    },
    backArrow: {
        width: 25,
        height: 25,
    },
    container: {
        backgroundColor: "#f3f3f3",
        flex: 1,
    },
})