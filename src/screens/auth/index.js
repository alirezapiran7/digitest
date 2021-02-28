import React, { useEffect, useState } from 'react'
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View, } from 'react-native'
import { color } from '../../constants'
import { FormInput } from '../../components/Input'
import { Button } from '../../components/Button'
import { login } from '../../redux/actions/actionsAuth'
import { useDispatch, useSelector } from 'react-redux'


const index = ({ navigation }) => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.modal.isLoading)

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={{ flexGrow: 1, }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                    keyboardShouldPersistTaps='handled'>
                    <Text style={{ alignSelf: 'center' }}>Logo</Text>
                    <View style={{ flexDirection: 'column' }}>
                        <FormInput
                            lableValue={userName}
                            onChange={(value) => setUserName(value)}
                            placeHolder="UserName"
                            icon={"user"} />

                        <FormInput
                            lableValue={password}
                            secureTextEntry={true}
                            onChange={(value) => setPassword(value)}
                            placeHolder="Password"
                            icon="lock" />

                    </View>
                    <Button style={{ marginTop: 20 }}
                        buttonTitle="Login"
                        isLoading={isLoading}
                        onPress={() => {
                            dispatch(login({ username: userName, password: password, navigation: navigation }))
                        }} />
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background_screen,
        justifyContent: 'space-around',
        paddingHorizontal: 20
    }
})
