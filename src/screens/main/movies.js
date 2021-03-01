import React, { useState, useEffect } from 'react'
import { Alert, FlatList, KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { color, urls } from '../../constants'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Text from '../../components/Text'
import { IconX, ICON_TYPE } from '../../icons'
import { Delete, Get, updateState } from '../../redux/actions/actionsApi'
import { useSelector, useDispatch } from 'react-redux'
import { Rating } from 'react-native-ratings'
import Search from '../../components/Search'
import { ChoicesItem } from '../../components/ListItem'

const movies = ({ navigation }) => {
    const insets = useSafeAreaInsets()
    const dispatch = useDispatch()
    const movies = useSelector(state => state.api.movies)
    const category = useSelector(state => state.api.category)
    const deleteMovie = useSelector(state => state.api.deleteMovie)

    const [searchText, setSearchText] = useState('')
    const [showFilter, setShowFilter] = useState(false)
    const [selectedCategory, setselectedCategory] = useState({})
    const [selectedCountry, setSelectedCountry] = useState("")
    const countreis = ["IND", "USA", "AUS"]

    useEffect(() => {
        dispatch(Get({ url: urls.movies, result: 'movies', isLoading: true }))
        dispatch(Get({ url: urls.category, result: 'category' }))
        return () => {
        }
    }, [])



    useEffect(() => {
        console.log("showFilter");
        if (!showFilter) {
            setselectedCategory({})
            setSelectedCountry("")
            dispatch(Get({ url: urls.movies, result: 'movies', isLoading: true }))
        }
        return () => { }
    }, [showFilter])

    useEffect(() => {
        console.log("search");
        let path = "?"
        if (selectedCountry !== "")
            path += "country=" + selectedCountry + "&"
        if (selectedCategory.id)
            path += "tags=" + selectedCategory.name + "&"
        if (searchText !== "")
            path += "search=" + searchText
        if (path !== "")
            dispatch(Get({ url: urls.movies + path, result: 'movies', isLoading: true }))
        console.log("search paht", urls.movies + path);
        return () => { }
    }, [selectedCategory, selectedCountry, searchText])


    useEffect(() => {
        if (deleteMovie === true) {
            dispatch(Get({ url: urls.movies, result: 'movies', isLoading: true }))
            dispatch(updateState({ key: 'deleteMovie', value: false }))
        }


        return () => { }
    }, [deleteMovie])

    return (
        <View style={[styles.continer, { paddingTop: insets.top }]}>

            <Search value={searchText} onChange={(value) => { setSearchText(value) }} filterButton={() => {
                setShowFilter(!showFilter)
            }} />

            {/* <TouchableOpacity style={styles.searchBox} onPress={() => {
                navigation.navigate("search")
            }}>
                <Text style={styles.searchText}>Search</Text>
                <IconX name={"search"} />
            </TouchableOpacity> */}
            {showFilter && <View>

                <View style={{ marginTop: 16 }}>
                    <Text style={{ marginHorizontal: 16, fontSize: 18, alignSelf: 'center' }}>Country</Text>
                    <FlatList
                        data={countreis}
                        style={{ marginVertical: 8 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            const isSelected = item == selectedCountry
                            return (<ChoicesItem text={item} isSelected={isSelected} onPress={() => {
                                if (isSelected)
                                    setSelectedCountry("")
                                else
                                    setSelectedCountry(item)
                            }} />)

                        }} />
                </View>


                <View style={{ marginTop: 16 }}>
                    <Text style={{ marginHorizontal: 16, fontSize: 18, alignSelf: 'center' }}>Tags</Text>
                    <FlatList
                        data={category ? category : []}
                        style={{ marginVertical: 8 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => {
                            const isSelected = item.id === selectedCategory.id
                            return (<ChoicesItem text={item.name} isSelected={isSelected} onPress={() => {
                                if (isSelected) {
                                    setselectedCategory({})
                                } else {
                                    setselectedCategory(item)
                                }

                            }} />)

                        }} />
                </View>

            </View>}


            <FlatList
                data={movies}
                style={{ marginVertical: 8, marginBottom: insets.bottom }}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, marginVertical: 4, marginHorizontal: 8, backgroundColor: color.white, padding: 8, borderRadius: 8 }}>

                        <View style={{ flexDirection: 'row', }}>
                            <IconX size={50} name={"image"} style={{ borderRadius: 8 }} />
                            <View style={{ flex: 1, marginStart: 4 }}>

                                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ flex: 1, fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                                    <Text style={{ width: 80 }}>{item.date_of_release}</Text>
                                </View>

                                <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text>{item?.director.split(":")[1]}</Text>
                                    <Rating
                                        type='custom'
                                        ratingCount={5}
                                        imageSize={10}
                                        readonly={true}
                                        startingValue={item.rating}
                                        ratingColor={color.yellow800}

                                    />
                                </View>

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                                {item.tags.map(item => (
                                    <View style={{ borderRadius: 8, height: 25, backgroundColor: color.grey100, justifyContent: 'center', alignItems: 'center', margin: 4, padding: 4 }}>
                                        <Text>{item}</Text>
                                    </View>
                                ))}
                            </View>
                            <View style={{ flexDirection: 'row', width: 80 }}>
                                <TouchableOpacity style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', marginHorizontal: 4 }}
                                    onPress={() => {
                                        navigation.navigate("editMovie", { movieId: item.id })
                                    }}>
                                    <IconX name={"edit"} color={color.tint} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', marginHorizontal: 4 }}
                                    onPress={() => {
                                        dispatch(Delete({ url: urls.movies + item.id, isLoading: true }))
                                    }}>
                                    <IconX name={"trash"} color={color.tint} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                )} />

        </View>
    )
}

export default movies

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background_screen,
    },
    searchBox: {

        backgroundColor: color.white,
        borderRadius: 8,
        flexDirection: 'row',
        height: 50,
        paddingHorizontal: 16,
        margin: 8,
        alignItems: 'center'
    },
    searchText: {
        color: color.grey600,
        fontSize: 18,
        flex: 1,
        fontWeight: 'bold'
    }
})
