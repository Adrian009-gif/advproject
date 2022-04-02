import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function FlatButton({ text, onPress }){
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        height: 50,
        marginTop: 50,
        marginLeft: 100,
        marginRight: 100,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#000000'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    },
})