import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FaCashRegister } from 'react-icons/fa'

export default function CashRegister() {
    const [price, setPrice] = useState('')
    const [cash, setCash] = useState('')
    const [penny, setPenny] = useState('')

    const arrayCid = [
        ["PENNY", penny],
        ["NICKEL"],
        ["DIME"],
        ["QUARTER"],
        ["ONE"],
        ["FIVE"],
        ["TEN"],
        ["TWENTY"],
        ["ONE HUNDRED"],
    ]

    console.log(arrayCid)
    // function setCashInDraw(e){

    //     //e.preventDefault();
    //     setCid((prevState) => {
    //       const newValue = {
    //         ...prevState,
    //         [e.target.name]: e.target.value,
    //       };
    //       //setErrors(validate(newValue));
    
    //       return newValue;
    //     });
    //}
    return (
        <View style={styles.container}>
            <FaCashRegister style={styles.icon}/>
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
                    onChangeText={setPenny}
                    value={penny}
                />
            </View>
            {/* {<Text style={styles.greenBox}>{roman}</Text>} */}
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
        marginTop: 8,
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
        margin: 8,
        paddingVertical: 6,
        width: 80,
        backgroundColor: '#fff'
    },
    inputCid: {
        width: 40,
        borderRadius: 4,
        margin: 8,
        paddingVertical: 2,
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