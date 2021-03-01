import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { color } from '../constants'
import { IconX } from '../icons'

const Header = ({ navigation, title, rightButton }) => {

    const insests = useSafeAreaInsets()
    return (
        <View style={{height: insests.top + 50, paddingTop: insests.top,backgroundColor: color.white,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center'
        }}>

            <View style={{ marginHorizontal: 16 }}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()

                }}>
                    <IconX name={'arrow-left'} />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{ fontSize: 18 }}>{title}</Text>
            </View>

            <View style={{ marginHorizontal: 16 }}>
                {rightButton ? rightButton() : null}
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
       
        backgroundColor: color.white,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    }
})
