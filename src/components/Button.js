import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator, ColorPropType, Image } from 'react-native';
import { color, metrics } from '../constants';
import Text from './Text'



export const Button = ({ buttonTitle, isLoading, style, onPress }) => {
    return (
        <TouchableOpacity style={[styles.continer, { ...style }]} disabled={isLoading}
            onPress={onPress}>
            <Text style={styles.solidText}>{buttonTitle}</Text>
            {isLoading && <ActivityIndicator style={{ flex: 1, width: '100%', height: '100%', position: 'absolute', backgroundColor: color.transparentWhite }}
                color={ color.tint} />}
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    continer: {
        backgroundColor: color.tint,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: metrics.s8,
        borderColor: color.white,
        height: 45,
        marginTop: metrics.s8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
