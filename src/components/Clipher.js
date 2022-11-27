import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { MdPrecisionManufacturing } from 'react-icons/md'
import caesarsClipher from '../utils/caesarsClipher';

export default function Clipher() {
    const [ text, setText ] = useState('')

    let cipher = caesarsClipher(text)
    return (
        <View style={styles.container}>
            <MdPrecisionManufacturing style={styles.icon}/>
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
