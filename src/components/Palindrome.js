import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AiFillCheckCircle } from 'react-icons/ai'
import palindromeChecker from '../utils/palindromeChecker';

export default function Palindrome() {
    const [ text, setText ] = useState('')

    let check = palindromeChecker(text)

    return (
        <View style={styles.container}>
            <AiFillCheckCircle style={styles.icon}/>
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
        color: '#5ced64',
        height: 40,
        width: 40,
    },
    input: {   
        borderRadius: 4,
        margin: 16,
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
