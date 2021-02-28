import React, { useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { color, metrics } from '../constants'
import Text from './Text'
import { useDispatch } from 'react-redux'
import { disMis } from '../redux/actions/actionsModal'





const Alert = (props) => {
    const dispatch = useDispatch();
    const modalButton = (title, action) => {
        return (

            <TouchableOpacity style={{ borderRadius: metrics.s8, backgroundColor: color.tint, width: 80, height: 40, marginTop: metrics.s8, marginEnd: metrics.s16, justifyContent: 'center', alignItems: 'center' }}
                onPress={async () => {

                    dispatch(disMis())
                    action()

                }}>
                <Text style={{ fontSize: 14, color: color.white }}>
                    {title}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            paddingBottom: 50,
            borderTopStartRadius: metrics.s16,
            borderTopEndRadius: metrics.s16,
            backgroundColor: color.white
        }}>
            <Text style={{ color: color.text, fontSize: 16, textAlign: 'center', marginTop: metrics.s16, }}>
                {props.title}
            </Text>
            <Text style={{ color: color.text, fontSize: 14, textAlign: 'center', marginVertical: metrics.s16, }}>
                {props.message}
            </Text>
            <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>


                {props.actions != null && props.actions.length !== 0 ? props.actions.map(item => {
                    return modalButton(item.title, item.action)
                }) :
                    modalButton('Ok', disMis)
                }
            </View>
        </View>
    )
}

export default Alert

const styles = StyleSheet.create({})
