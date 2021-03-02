import React from 'react';
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { color, metrics } from '../constants';
import { useDispatch } from 'react-redux'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { IconX, ICON_TYPE } from '../icons';
import Text from './Text'
import { disMis, showModal } from '../redux/actions/actionsModal';


export default AddButton = ({ navigation }) => {

    const dispatch = useDispatch()
    const insets = useSafeAreaInsets()

    const Buttons = ({ title, icon, onPress }) => {
        return (
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}
                onPress={() => {
                    onPress()
                    dispatch(disMis())
                }}>
                <View style={{ backgroundColor: color.tint, width: 50, height: 50, borderRadius: 25, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', }} >
                    <IconX name={icon} origin={ICON_TYPE.FONT_AWESOME5} size={metrics.icons.small} color={color.white} />
                </View>
                <Text style={{ color: color.gray, }}>{title}</Text>
            </TouchableOpacity>)
    }

    const componentModal = () => {
        return (

            <View style={{ position: 'absolute', width: '100%', height: 60, flexDirection: 'row', bottom: 60 + insets.bottom }}>
                <Buttons title={'New Movie'} icon={'film'} onPress={() => {
                    navigation.navigate("newMovie")
                }} />
                 <Buttons title={'New Category'} icon={'clipboard-list'} onPress={() => {
                    navigation.navigate("newCategory")
                }} />
                <Buttons title={'New Person'} icon={'users'} onPress={() => {
                    navigation.navigate("newPerson")
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