import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator, Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { strings, metrics, urls, color } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import {getUser} from '../../redux/actions/actionsAuth'



const index = ({ navigation }) => {

    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.api.isLoading)
    const user = useSelector(state => state.auth.token)

    useEffect(() => {
        setTimeout(() => {
            checkExistuser()
        }, 3000);
    }, [])

    const checkExistuser = async () => {
        const token = await AsyncStorage.getItem('token');
        if (token == null) {
            navigation.replace("auth")
        } else {
             dispatch(getUser({navigation:navigation}))
        }
    }

    return (
        <View style={styles.continer}>
            <Text style={{ alignSelf: 'center' }}>LOGO</Text>
            {isLoading && <ActivityIndicator size={'small'} color={color.white} style={styles.loading} />}
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.tint
    },
    imgLogo: {
        height: metrics.images.logo,
        tintColor: color.white,
    },
    loading: {
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: metrics.s40,

    }


})
