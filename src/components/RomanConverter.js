import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import romanNumConverter from '../utils/romanNumConverter';

export default function RomanConverter() {
    const [ number, setNumber ] = useState('')

    let roman
    if(number.length === 0) roman = romanNumConverter(number)
    else roman = romanNumConverter(parseInt(number))

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Roman Numeral Converter</Text>
            <Text style={styles.text}>Enter a number to convert it to roman number</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNumber}
                value={number}
            />
            {<Text style={styles.greenBox}>{roman}</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'top',
    },
    box: {
        backgroundColor: '#102010',
        flexDirection: 'row',
        height: 80,
        width: 300 ,
        padding: 16,
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 600,
        color: '#809980',
    },
    title: {
        fontSize: 24,
        fontWeight: 600,
        margin: 8,
        color: '#5ced64',
    },
    icon: {
        color: '#809980',
        height: 40,
        width: 40,
        margin: 8,
    },
    input: {   
        borderRadius: 4,
        margin: 8,
        paddingVertical: 6,
        paddingHorizontal: 60,
        backgroundColor: '#fff'
    },
    redBox: {
        borderRadius: 4,
        margin: 8,
        padding: 8,
        backgroundColor: '#d1271b'
    },
    greenBox: {
        borderRadius: 4,
        margin: 8,
        padding: 8,
        backgroundColor: '#29e357'
    },
    whiteBox: {
        borderRadius: 4, 
        margin: 8,
        padding: 8,
        backgroundColor: '#fff'
    }
});