import React, { useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Alert, Animated } from "react-native";
import { color, strings, metrics } from '../constants';
import { useDispatch } from 'react-redux'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { IconX, ICON_TYPE } from '../icons';
import Text from './Text'
import { clearModal, disMis, showModal } from '../redux/actions/actionsModal';


export default AddButton = ({ navigation }) => {

    const dispatch = useDispatch()
    const insets = useSafeAreaInsets()

    const Buttons = ({ title, icon, onPress }) => {
        return (
            <TouchableOpacity style={{ flex: 1, backgroundColor: color.grey100, borderRadius: 8, marginHorizontal: 4, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
                onPress={() => {
                    onPress()
                    dispatch(disMis())
                }}>
                <IconX name={icon} origin={ICON_TYPE.FONT_AWESOME5} size={metrics.icons.small} color={color.tint} />
                <Text style={{ color: color.tint, marginStart: 8 }}>{title}</Text>
            </TouchableOpacity>)
    }

    const componentModal = () => {
        return (

            <View style={{ position: 'absolute', width: '100%', height: 60, flexDirection: 'row', bottom: 60 + insets.bottom }}>
                <Buttons title={'Scan QR Code'} icon={'qrcode'} onPress={() => {
                    // dispatch(setOrderType(orderTypes.dine_in))
                    // navigation.navigate(strings.scanner)
                }} />
                <Buttons title={'Order for Collection'} icon={'walking'} onPress={() => {
                    // dispatch(setOrderType(orderTypes.collection))
                    // navigation.navigate(strings.stores)
                }} />
            </View>
        )
    }


    return (
        <>
            <TouchableOpacity onPress={() => {
                dispatch(showModal({ component: componentModal, isCancel: true, transparent: true, animationType: '' }))
            }}
                style={{
                    height: 45,
                    width: 45,
                    backgroundColor: color.tint,
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <IconX origin={ICON_TYPE.FONT_AWESOME5} name={'plus'} color={color.white} />

            </TouchableOpacity>

        </>
    );
}
const styles = StyleSheet.create({
    modal: {
        backgroundColor: color.white,
        borderTopRightRadius: metrics.componentRadius,
        borderTopLeftRadius: metrics.componentRadius,
    },
    buttonStyle: {
        height: 50,
        width: 75,
        marginTop: -22,
        backgroundColor: color.tint,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },


});