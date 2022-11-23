import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import caesarsClipher from '../utils/caesarsClipher';

export default function Clipher() {
    const [ text, setText ] = useState('')

    let cipher = caesarsClipher(text)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Caesars Cipher</Text>
            <Text style={styles.text}>Enter a string to cipher with ROT13 algorithm.</Text>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
            />
            {text.length === 0 ? <Text style={styles.whiteBox}>{cipher}</Text> : <Text style={styles.greenBox}>{cipher}</Text>}
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
