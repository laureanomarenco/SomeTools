import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import palindromeChecker from '../utils/palindromeChecker';

export default function Palindrome() {
    const [ text, setText ] = useState('')

    let check = palindromeChecker(text)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Palindrome Checker</Text>
            <Text style={styles.text}>Enter a string to check if is or not a palindrome.</Text>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
            />
            {typeof check === 'string' ? <Text style={styles.whiteBox}>{check}</Text>: check ? <Text style={styles.greenBox}>Is a Palindrome!</Text> : <Text style={styles.redBox}>Is not a Palindrome</Text>}
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
