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
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'top',
    },
    title: {
        fontSize: 16,
        marginTop: 8,
        color: '#fff',
    },
    text: {
        marginTop: 8,
        color: '#fff',
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