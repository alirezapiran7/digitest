import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { color } from '../constants'
import { IconX } from '../icons'

const Search = ({ value, placeHolder = "Search", isloading = false, onChange, style, placeHolderStyle }) => {

    return (
        <View style={[styles.searchContiner, style]}>
            <TextInput value={value} style={{ flex: 1, fontSize: 14, marginHorizontal: 16 }}
                placeholder={placeHolder} returnKeyType='search' onChange={onChange} clearButtonMode />
            {/* <ActivityIndicator style={{position:'absolute',end:8,}} animating={isloading} size={'small'} color={color.gray}/> */}
            <IconX name={"search"} />
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
