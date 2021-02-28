import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { color } from '../constants'

export const movieItem = () => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export const ChoicesItem = ({ text, isSelected, onPress }) => {
    return (
        <TouchableOpacity style={{ padding: 8, marginHorizontal: 4, borderRadius: 8, borderColor: color.tint, backgroundColor: isSelected ? color.tint : color.grey300 }}
            onPress={onPress}>
            <Text style={{ color: isSelected ? color.white : color.tint, fontSize: 14 }}>{text}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({})
