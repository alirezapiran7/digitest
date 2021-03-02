import React, { useEffect, useState } from 'react'
import { Alert, FlatList, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../components/Header'
import { color, urls } from '../../constants'
import { FormInput } from '../../components/Input'
import { Get, Create, GetOne, Put, Patch, updateState } from '../../redux/actions/actionsApi'
import { useDispatch, useSelector } from 'react-redux'
import { ChoiceList, ChoicesItem } from '../../components/ListItem'
import { Button } from '../../components/Button'
import { disMis, showAlert } from '../../redux/actions/actionsModal'


const editPerson = ({ navigation, route }) => {
    
    const category = useSelector(state => state.api.category)

    const isLoading = useSelector(state => state.modal.isLoading)
    const isGlobalLoading = useSelector(state => state.modal.isGlobalLoading)

    const { personId } = route.params;
    const person = useSelector(state => state.api[`person_${personId}`])
    const updated = useSelector(state => state.api[`person_update_${personId}`])

   
    const [selectedCategory, setSelectedCategory] = useState([])
    const [selectedCountry, setSelectedCountry] = useState({})
    const [title, setTitle] = useState({})


    const countreis = [{ id: 1, name: "IND" }, { id: 2, name: "USA" }, { id: 3, name: "AUS" }]

    const dispatch = useDispatch()

    useEffect(() => {

        if (updated === true) {
            Alert.alert("Updated Person")
            dispatch(Get({ url: urls.persons, result: 'persons', isLoading: true }))
            navigation.goBack()
            dispatch(updateState({ key: `person_update_${personId}`, value: false }))
        }
        return () => { }
    }, [updated])

    useEffect(() => {

        dispatch(GetOne({ url: urls.persons + personId, result: `person_${personId}`, isLoading: true }))
        if (!category || category.length === 0)
            dispatch(Get({ url: urls.category, result: 'category' }))
        return () => {
        }
    }, [])

    useEffect(() => {
        if (person && person.id) {
            if (person?.full_name)
                setTitle(person?.full_name)

            if (person?.country) {
                const lan = countreis.find(item => item.name == person?.country)
                setSelectedCountry(lan)
            }

            if (person?.categories && category?.length > 0) {
                const arr = person?.categories.map(name => {
                    return category.find(item => item.name == name)
                })
                setSelectedCategory([...selectedCategory, ...arr])
            }
        }
        return () => {
        }
    }, [person])

    useEffect(() => {
        if (person?.categories && category?.length > 0) {
            const arr = person?.categories.map(name => {
                return category.find(item => item.name == name)
            })
            setSelectedCategory([...selectedCategory, ...arr])
        }
        return () => { }
    }, [category])


    const isSelectedCategory = (item) => {
        const f = selectedCategory.find(a => a.id === item.id)
        return f ? true : false
    }


    const editPerson = () => {
        if (title.length === 0)
            return dispatch(showAlert({ action: () => dispatch(disMis()), title: "insert a title" }))

        if (!selectedCountry.id)
            return dispatch(showAlert({ action: () => dispatch(disMis()), title: "select Country" }))

        if (selectedCategory.length === 0)
            return dispatch(showAlert({ action: () => dispatch(disMis()), title: "select Category" }))

        let categories = selectedCategory.map(item => item.id)
        const data = {
            full_name: title,
            country: selectedCountry.name,
            categories: categories,
        }
        dispatch(Put({ url: urls.persons + personId, data: data, isLoading: true }))
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} title={"Edit Movie"} />

            {!isGlobalLoading && <ScrollView >
                <FormInput icon="pen" placeHolder={"title"} lableValue={title} onChange={(value) => setTitle(value)} />


                <ChoiceList title="Country" list={countreis} renderItem={(item) => {
                    const isSelected = item.id === selectedCountry.id
                    return (<ChoicesItem text={item.name} isSelected={isSelected} onPress={() => {
                        setSelectedCountry(item)
                    }} />)
                }} />

                <ChoiceList title="Category" list={category ? category : []} renderItem={(item) => {
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

                <Button style={{ marginTop: 16, marginHorizontal: 8, marginBottom: 50 }}
                    isLoading={isLoading}
                    buttonTitle="Update" onPress={() => {
                        editPerson()
                    }} />
            </ScrollView>
            }
        </View>
    )
}

export default editPerson

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
    }
})
