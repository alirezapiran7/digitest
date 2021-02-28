import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'

const newPerson = ({ navigation }) => {
    return (
        <View>
            <Header navigation={navigation} title={"New Person"} />
        </View>
    )
}

export default newPerson

const styles = StyleSheet.create({})
