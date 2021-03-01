import React, { useEffect, useState } from 'react'
import { Alert, FlatList, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../components/Header'
import { color, urls } from '../../constants'
import { FormInput } from '../../components/Input'
import { Get, Create, updateState } from '../../redux/actions/actionsApi'
import { useDispatch, useSelector } from 'react-redux'
import { ChoiceList, ChoicesItem } from '../../components/ListItem'
import { Button } from '../../components/Button'
import { disMis, showAlert } from '../../redux/actions/actionsModal'
import DatePicker from '@react-native-community/datetimepicker'
import DateFormat from 'dateformat'


const newMovie = ({ navigation }) => {
    const personDirector = useSelector(state => state.api.personDirector)
    const personActor = useSelector(state => state.api.personActor)
    const category = useSelector(state => state.api.category)

    const isLoading = useSelector(state => state.modal.isLoading)
    const isCreated = useSelector(state => state.api.isCreated)

    const [selectedDirector, setSelectedDirector] = useState({})
    const [selectedCategory, setSelectedCategory] = useState([])
    const [selectedCast, setSelectedCast] = useState([])
    const [selectedlanguages, setSelectedlanguages] = useState({})
    const [selectedCountry, setSelectedCountry] = useState({})
    const [title, setTitle] = useState("")
    const [show, setShow] = useState(false)
    const [date, setDate] = useState(new Date())



    const languages = [{ id: 1, name: "hindi" }, { id: 2, name: "english" }]
    const countreis = [{ id: 1, name: "IND" }, { id: 2, name: "USA" }, { id: 3, name: "AUS" }]

    const dispatch = useDispatch()

    useEffect(() => {
        if (!personActor || personActor.length === 0)
            dispatch(Get({ url: urls.baseApi + "person?categories=actor", result: 'personActor' }))
        if (!personDirector || personDirector.length === 0)
            dispatch(Get({ url: urls.baseApi + "person?categories=director", result: 'personDirector' }))
        if (!category || category.length === 0)
            dispatch(Get({ url: urls.category, result: 'category' }))

        return () => {
        }
    }, [])

    useEffect(() => {

        if (isCreated === true) {
            Alert.alert("Create New Movie")
            dispatch(Get({ url: urls.movies, result: 'movies', isLoading: true }))
            navigation.goBack()
            dispatch(updateState({ key: 'isCreated', value: false }))
        }
        return () => { }
    }, [isCreated])

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
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

        if (!selectedlanguages.id)
            return dispatch(showAlert({ action: () => dispatch(disMis()), title: "select Language" }))

        if (!selectedCountry.id)
            return dispatch(showAlert({ action: () => dispatch(disMis()), title: "select Country" }))

        if (selectedCategory.length === 0)
            return dispatch(showAlert({ action: () => dispatch(disMis()), title: "select tag" }))

        let castId = selectedCast.map(item => item.id)
        let tagsId = selectedCategory.map(item => item.id)
        const data = {
            title: title,
            date_of_release: DateFormat(date, "yyyy-mm-dd"),
            country: selectedCountry.name,
            tags: tagsId,
            language: selectedlanguages.name,
            cast: castId,
            director: selectedDirector.id
        }
        dispatch(Create({ url: urls.movies, data: data, result: 'isCreated', isLoading: true }))
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} title={"New Movie"} />

            <ScrollView >
                <FormInput icon="pen" placeHolder={"title"} lableValue={title} onChange={(value) => setTitle(value)} />


                <ChoiceList title="Director" list={personDirector} renderItem={(item) => {
                    const isSelected = item.id == selectedDirector.id
                    return (<ChoicesItem text={item.full_name} isSelected={isSelected} onPress={() => {
                        setSelectedDirector(item)
                    }} />)
                }} />

                <ChoiceList title="Cast" list={personActor ? personActor : []} renderItem={(item) => {
                    const isSelected = isSelectedCast(item)
                    return (<ChoicesItem text={item.full_name} isSelected={isSelected} onPress={() => {
                        if (isSelectedCast(item)) {
                            const newArr = selectedCast.filter(arr => arr.id !== item.id)
                            setSelectedCast([...newArr])
                        } else {
                            setSelectedCast([...selectedCast, item])
                        }

                    }} />)
                }} />

                <ChoiceList title="Language" list={languages} renderItem={(item) => {
                    const isSelected = item.id === selectedlanguages.id
                    return (<ChoicesItem text={item.name} isSelected={isSelected} onPress={() => {
                        setSelectedlanguages(item)
                    }} />)
                }} />

                <ChoiceList title="Country" list={countreis} renderItem={(item) => {
                    const isSelected = item.id === selectedCountry.id
                    return (<ChoicesItem text={item.name} isSelected={isSelected} onPress={() => {
                        setSelectedCountry(item)
                    }} />)
                }} />


                <ChoiceList title="Tags" list={category ? category : []} renderItem={(item) => {
                    const isSelected = isSelectedCategory(item)
                    return (<ChoicesItem text={item.name} isSelected={isSelected} onPress={() => {
                        if (isSelectedCategory(item)) {
                            const newArr = selectedCategory.filter(arr => arr.id !== item.id)
                            setSelectedCategory([...newArr])
                        } else {
                            setSelectedCategory([...selectedCategory, item])
                        }

                    }} />)
                }} />

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
