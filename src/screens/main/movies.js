import React, { useState, useEffect } from 'react'
import { FlatList, KeyboardAvoidingView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { color, urls } from '../../constants'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Text from '../../components/Text'
import { IconX, ICON_TYPE } from '../../icons'
import { Delete, Get, updateState } from '../../redux/actions/actionsApi'
import { useSelector, useDispatch } from 'react-redux'
import { Rating } from 'react-native-ratings'
import Search from '../../components/Search'
import { ChoiceList, ChoicesItem } from '../../components/ListItem'

const movies = ({ navigation }) => {
    const insets = useSafeAreaInsets()
    const dispatch = useDispatch()

    const movies = useSelector(state => state.api.movies)
    const category = useSelector(state => state.api.category)
    const deleteMovie = useSelector(state => state.api.deleteMovie)

    const [searchText, setSearchText] = useState('')
    const [showFilter, setShowFilter] = useState(false)
    const [selectedCategory, setselectedCategory] = useState({})
    const [selectedCountry, setSelectedCountry] = useState({})

    const countreis = [{ id: 1, name: "IND" }, { id: 2, name: "USA" }, { id: 3, name: "AUS" }]

    useEffect(() => {
        dispatch(Get({ url: urls.movies, result: 'movies', isLoading: true }))
        dispatch(Get({ url: urls.category, result: 'category' }))
        return () => {
        }
    }, [])


    useEffect(() => {

        if (!showFilter) {
            setselectedCategory({})
            setSelectedCountry("")
            dispatch(Get({ url: urls.movies, result: 'movies', isLoading: true }))
        }
        return () => { }
    }, [showFilter])

    useEffect(() => {
        let path = "?"
        if (selectedCountry.id)
            path += "country=" + selectedCountry.name + "&"
        if (selectedCategory.id)
            path += "tags=" + selectedCategory.name + "&"
        if (searchText !== "")
            path += "search=" + searchText
        if (path !== "")
            dispatch(Get({ url: urls.movies + path, result: 'movies', isLoading: true }))

        return () => { }
    }, [selectedCategory, selectedCountry, searchText])


    useEffect(() => {
        if (deleteMovie === true) {
            dispatch(Get({ url: urls.movies, result: 'movies', isLoading: true }))
            dispatch(updateState({ key: 'deleteMovie', value: false }))
        }
        return () => { }
    }, [deleteMovie])

    const movieItem = (item) => {
        return (
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
        )
    }

    return (
        <View style={[styles.continer, { paddingTop: insets.top }]}>

            <Search value={searchText}placeHolder={"Search Movie"} onChange={(value) => { setSearchText(value) }} filterButton={() => {
                setShowFilter(!showFilter)
            }} />

            {showFilter && <View>
                <ChoiceList title="Country" list={countreis} renderItem={(item) => {
                    const isSelected = item.id === selectedCountry.id
                    return (<ChoicesItem text={item.name} isSelected={isSelected} onPress={() => {
                        setSelectedCountry(item)
                    }} />)
                }} />
                <ChoiceList title="Tags" list={category ? category : []} renderItem={(item) => {
                    const isSelected = item.id === selectedCategory.id
                    return (<ChoicesItem text={item.name} isSelected={isSelected} onPress={() => {
                        setselectedCategory(item)
                    }} />)
                }} />
            </View>}

            <FlatList
                data={movies}
                style={{ marginVertical: 8, marginBottom: insets.bottom }}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => movieItem(item)} />
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
