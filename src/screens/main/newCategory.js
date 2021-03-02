import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import Header from '../../components/Header'
import { color, urls } from '../../constants'
import { FormInput } from '../../components/Input'
import { Get, Create, updateState } from '../../redux/actions/actionsApi'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../../components/Button'
import { disMis, showAlert } from '../../redux/actions/actionsModal'


const newCategory = ({ navigation }) => {
    const category = useSelector(state => state.api.category)
    const isLoading = useSelector(state => state.modal.isLoading)
    const isCreated = useSelector(state => state.api.isCreated)


    const [title, setTitle] = useState("")


    const dispatch = useDispatch()


    useEffect(() => {

        if (isCreated === true) {
            Alert.alert("Create New Category")
            dispatch(Get({ url: urls.category, result: 'category', isLoading: true }))
            navigation.goBack()
            dispatch(updateState({ key: 'isCreated', value: false }))
            dispatch(updateState({ key: 'personActor', value: [] }))
            dispatch(updateState({ key: 'personDirector', value: [] }))
        }
        return () => { }
    }, [isCreated])



    const createCategory = () => {
        if (title.length === 0)
            return dispatch(showAlert({ action: () => dispatch(disMis()), title: "insert a title" }))

        dispatch(Create({ url: urls.category, data: {name:title}, result: 'isCreated', isLoading: true }))
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} title={"New Category"} />

            <FormInput icon="pen" placeHolder={"title"} lableValue={title} onChange={(value) => setTitle(value)} />

            <Button style={{ marginTop: 16, marginHorizontal: 8, marginBottom: 50 }}
                isLoading={isLoading}
                buttonTitle="Save" onPress={() => {
                    createCategory()
                }} />


        </View>
    )
}

export default newCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
    }
})
