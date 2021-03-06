import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { metrics, color } from '../constants'
import { IconX, ICON_TYPE } from '../icons'

export const FormInput = ({ lableValue, placeHolder = '', onChange, isloading = false, icon, style, ...other }) => {

    return (
        <View style={[styles.continer, style]}>
            {icon && <IconX name={icon} origin={ICON_TYPE.FONT_AWESOME5} />}
            <TextInput value={lableValue} style={{ flex: 1, fontSize: 18, marginHorizontal: 16 }}
                placeholder={placeHolder} onChangeText={onChange}  {...other} />

        </View>
    )
}

const styles = StyleSheet.create({
    continer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.grey300,
        borderRadius: 8,
        marginHorizontal: 8,
        marginTop:8,
        paddingHorizontal: 16,
        height: 45
    },

})

