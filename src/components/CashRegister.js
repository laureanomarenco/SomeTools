import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function CashRegister() {
    const [price, setPrice] = useState('')
    const [cash, setCash] = useState('')
    const [cid, setCid] = useState([
        ["PENNY"],
        ["NICKEL"],
        ["DIME"],
        ["QUARTER"],
        ["ONE"],
        ["FIVE"],
        ["TEN"],
        ["TWENTY"],
        ["ONE HUNDRED"],
    ])

    function setCashInDraw(){

    }
    console.log(cid)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CashRegister</Text>
            <Text style={styles.text}>Enter price, cash and cash in draw</Text>
            <Text style={styles.text}>Price</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPrice}
                value={price}
            />
            <Text style={styles.text}>Cash</Text>
            <TextInput
                style={styles.input}
                onChangeText={setCash}
                value={cash}
            />
            <Text style={styles.text}>Cash in draw</Text>
            <View style={styles.boxCid}>
                <Text style={styles.text}>Penny</Text>
                <TextInput
                    style={styles.inputCid}
                    onChangeText={setCashInDraw}
                    name='penny'
                />
            </View>
            {/* {<Text style={styles.greenBox}>{roman}</Text>} */}
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
    inputCid: {
        width: 4,
        borderRadius: 4,
        margin: 8,
        paddingVertical: 2,
        paddingHorizontal: 60,
        backgroundColor: '#fff'
    },
    boxCid: {
        flexDirection: 'row',
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