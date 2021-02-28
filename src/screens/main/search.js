import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { color } from '../../constants'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Text from '../../components/Text'
import { IconX, ICON_TYPE } from '../../icons'

const searchScreen = ({ navigation }) => {
    const insets = useSafeAreaInsets()
    const [search, setSearch] = useState('')


    useEffect(() => {
        console.log(search);
    }, [search])

    return (
        <View style={[styles.continer, { paddingTop: insets.top }]}>
            <KeyboardAvoidingView style={{ flexGrow:1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView
                    contentContainerStyle={{justifyContent: 'center' }}
                    keyboardShouldPersistTaps='handled'>
                    <View >
                        <View style={styles.searchContiner}>
                            <TouchableOpacity onPress={() => {
                                navigation.goBack()

                            }}>
                                <IconX name={'arrow-left'} />
                            </TouchableOpacity>

                            <TextInput autoFocus value={search} style={{ flex: 1, fontSize: 16, marginHorizontal: 16 }}
                                placeholder={"Search"} returnKeyType='search' onChangeText={(value) => setSearch(value)} clearButtonMode />
                            <TouchableOpacity>
                                <IconX name={'filter'} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        </View>
    )
}

export default searchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background_screen,
    },
    searchContiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
        borderRadius: 8,
        marginHorizontal: 8,
        paddingHorizontal: 16,
        height: 50
    }
})
