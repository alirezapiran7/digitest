import React, { useEffect, useState } from 'react'
import { Alert, FlatList, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../components/Header'
import { color, urls } from '../../constants'
import { FormInput } from '../../components/Input'
import { Get, Create } from '../../redux/actions/actionsApi'
import { useDispatch, useSelector } from 'react-redux'
import { ChoicesItem } from '../../components/ListItem'
import { Button } from '../../components/Button'
import { disMis, showAlert } from '../../redux/actions/actionsModal'
import DatePicker from '@react-native-community/datetimepicker'
import DateFormat from 'dateformat'


const newMovie = ({ navigation }) => {
    const personDirector = useSelector(state => state.api.personDirector)
    const personActor = useSelector(state => state.api.personActor)
    const category = useSelector(state => state.api.category)
    const isLoading = useSelector(state => state.modal.isLoading)

    const [selectedDirector, setSelectedDirector] = useState({})
    const [selectedCategory, setSelectedCategory] = useState([])
    const [selectedCast, setSelectedCast] = useState([])
    const [selectedlanguages, setSelectedlanguages] = useState("")
    const [selectedCountry, setSelectedCountry] = useState("")
    const [title, setTitle] = useState("")
    const [show, setShow] = useState(false)
    const [date, setDate] = useState(new Date())



    const languages = ["hindi", "english"]
    const countreis = ["IND", "USA", "AUS"]

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(Get({ url: urls.baseApi + "person?categories=actor", result: 'personActor' }))

        dispatch(Get({ url: urls.baseApi + "person?categories=director", result: 'personDirector' }))

        dispatch(Get({ url: urls.category, result: 'category' }))

        return () => {
        }
    }, [])
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        console.log("selected date", selectedDate);
    };


    const isSelectedCategory = (item) => {
        const f = selectedCategory.find(a => a.id === item.id)
        return f ? true : false
    }

    const isSelectedCast = (item) => {
        const f = selectedCast.find(a => a.id === item.id)
        return f ? true : false
    }

    const createMovie = () => {
        if (title.length === 0)
            return dispatch(showAlert({ action: () => dispatch(disMis()), title: "insert a title" }))

        if (!selectedDirector.id)
            return dispatch(showAlert({ action: () => dispatch(disMis()), title: "select Director" }))

        if (selectedCast.length === 0)
            return dispatch(showAlert({ action: () => dispatch(disMis()), title: "select cast" }))

        if (selectedlanguages === "")
            return dispatch(showAlert({ action: () => dispatch(disMis()), title: "select Language" }))

        if (selectedCountry === "")
            return dispatch(showAlert({ action: () => dispatch(disMis()), title: "select Country" }))

        if (selectedCategory.length === 0)
            return dispatch(showAlert({ action: () => dispatch(disMis()), title: "select tag" }))

        let castId = selectedCast.map(item => item.id)
        let tagsId = selectedCategory.map(item => item.id)
        const data = {
            title: title,
            date_of_release: DateFormat(date, "yyyy-mm-dd"),
            country: selectedCountry,
            tags: tagsId,
            language: selectedlanguages,
            cast: castId,
            director: selectedDirector.id
        }
        dispatch(Create({ url: urls.movies, data: data, isLoading: true }))
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} title={"New Movie"} />

            <ScrollView >
                <FormInput placeHolder={"title"} lableValue={title} onChange={(value) => setTitle(value)} />

                <View style={{ marginTop: 16 }}>
                    <Text style={{ marginHorizontal: 16, fontSize: 18, alignSelf: 'center' }}>Director</Text>
                    <FlatList
                        data={personDirector}
                        style={{ marginVertical: 8 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => {
                            const isSelected = item.id == selectedDirector.id
                            return (<ChoicesItem text={item.full_name} isSelected={isSelected} onPress={() => {
                                setSelectedDirector(item)
                            }} />)

                        }} />
                </View>

                <View style={{ marginTop: 16 }}>
                    <Text style={{ marginHorizontal: 16, fontSize: 18, alignSelf: 'center' }}>Cast</Text>
                    <FlatList
                        data={personActor ? personActor : []}
                        style={{ marginVertical: 8 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => {
                            const isSelected = isSelectedCast(item)
                            return (<ChoicesItem text={item.full_name} isSelected={isSelected} onPress={() => {
                                if (isSelectedCast(item)) {
                                    const newArr = selectedCast.filter(arr => arr.id !== item.id)
                                    setSelectedCast([...newArr])
                                } else {
                                    console.log("add to categoru");
                                    setSelectedCast([...selectedCast, item])
                                }

                            }} />)

                        }} />
                </View>


                <View style={{ marginTop: 16 }}>
                    <Text style={{ marginHorizontal: 16, fontSize: 18, alignSelf: 'center' }}>language</Text>
                    <FlatList
                        data={languages}
                        style={{ marginVertical: 8 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            const isSelected = item == selectedlanguages
                            return (<ChoicesItem text={item} isSelected={isSelected} onPress={() => {
                                setSelectedlanguages(item)
                            }} />)

                        }} />
                </View>

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
                            const isSelected = isSelectedCategory(item)
                            return (<ChoicesItem text={item.name} isSelected={isSelected} onPress={() => {
                                if (isSelectedCategory(item)) {
                                    const newArr = selectedCategory.filter(arr => arr.id !== item.id)
                                    setSelectedCategory([...newArr])
                                } else {
                                    console.log("add to categoru");
                                    setSelectedCategory([...selectedCategory, item])
                                }

                            }} />)

                        }} />
                </View>

                {show && <DatePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    display="default"
                    onChange={onChange}
                />}
                <Button style={{ marginTop: 16, marginHorizontal: 8 }}
                    buttonTitle={DateFormat(date, "yyyy-mm-dd")} onPress={() => {
                        setShow(true)
                    }} />
                <Button style={{ marginTop: 16, marginHorizontal: 8, marginBottom: 50 }}
                    isLoading={isLoading}
                    buttonTitle="Save" onPress={() => {
                        createMovie()
                    }} />
            </ScrollView>

        </View>
    )
}

export default newMovie

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
    }
})
