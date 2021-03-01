import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { color } from '../constants'

export const movieItem = () => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export const ChoiceList = ({ title, list = [], renderItem }) => {
    return (
        <View style={{ marginTop: 16 }}>
            <Text style={{ marginHorizontal: 16, fontSize: 18, alignSelf: 'center' }}>{title}</Text>
            <FlatList
                data={list}
                style={{ marginVertical: 8,alignSelf:'center' }}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => renderItem(item)} />
        </View>
    )
}

export const ChoicesItem = ({ text, isSelected, onPress }) => {
    return (
        <TouchableOpacity style={{ padding: 12, marginHorizontal: 4, borderRadius: 8, borderColor: color.tint, backgroundColor: isSelected ? color.tint : color.grey300 ,alignSelf:'center'}}
            onPress={onPress}>
            <Text style={{ color: isSelected ? color.white : color.tint, fontSize: 16 }}>{text}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({})
