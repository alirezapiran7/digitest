import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { color } from '../constants'
import { IconX } from '../icons'

const Search = ({ value, placeHolder = "Search", isloading = false, onChange, style, placeHolderStyle, filterButton  }) => {

    return (
        <View style={[styles.searchContiner, style]}>
            <IconX name={"search"} />
            <TextInput value={value} style={{ flex: 1, fontSize: 14, marginHorizontal: 16 }}
                placeholder={placeHolder} returnKeyType='search' onChangeText={onChange} clearButtonMode />
            {/* <ActivityIndicator style={{position:'absolute',end:8,}} animating={isloading} size={'small'} color={color.gray}/> */}
            {filterButton && <TouchableOpacity style={{padding:4}} onPress={filterButton} >
                <IconX name={"filter"} />
            </TouchableOpacity>}

        </View>


    )
}

export default Search

const styles = StyleSheet.create({
    searchContiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.white,
        borderRadius: 8,
        marginHorizontal: 8,
        paddingHorizontal: 16,
        height: 45
    }
})
