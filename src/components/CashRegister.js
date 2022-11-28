import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FaCashRegister } from 'react-icons/fa'
import { Button } from 'react-native-web';
import cashRegister from '../utils/cashRegister';

export default function CashRegister() {
    const [price, setPrice] = useState('')
    const [cash, setCash] = useState('')

    const [penny, setPenny] = useState('')
    const [nickel, setNickel] = useState('')
    const [dime, setDime] = useState('')
    const [quarter, setQuarter] = useState('')
    const [one, setOne] = useState('')
    const [five, setFive] = useState('')
    const [ten, setTen] = useState('')
    const [twenty, setTwenty] = useState('')
    const [oneHundred, setOneHundred] = useState('')

    const [change, setChange] = useState()
    let changeRet
    function handlePress() {
        const cid = [
            ["PENNY", parseFloat(penny)],
            ["NICKEL", parseFloat(nickel)],
            ["DIME", parseFloat(dime)],
            ["QUARTER", parseFloat(quarter)],
            ["ONE", parseFloat(one)],
            ["FIVE", parseFloat(five)],
            ["TEN", parseFloat(ten)],
            ["TWENTY", parseFloat(twenty)],
            ["ONE HUNDRED", parseFloat(oneHundred)],
        ]
        changeRet = cashRegister(price, cash, cid)
        setChange(changeRet)
    }
    return (
        <View style={styles.container}>
            <FaCashRegister style={styles.icon} />
            <Text style={styles.title}>CashRegister</Text>
            <Text style={styles.textMark}>Enter price and cash</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.container}>
                    <Text style={styles.text}>Price</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPrice}
                        value={price}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Cash</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setCash}
                        value={cash}
                    />
                </View>
            </View>
            <Text style={styles.textMark}>Cash in draw - Format: 0.00</Text>
            <View style={styles.boxCid}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.container}>

                        <Text style={styles.text}>Penny</Text>
                        <TextInput
                            style={styles.inputCid}
                            onChangeText={setPenny}
                            value={penny}
                        />
                    </View>
                    <View style={styles.container}>

                        <Text style={styles.text}>Nickel</Text>
                        <TextInput
                            style={styles.inputCid}
                            onChangeText={setNickel}
                            value={nickel}
                        />
                    </View>
                    <View style={styles.container}>

                        <Text style={styles.text}>Dime</Text>
                        <TextInput
                            style={styles.inputCid}
                            onChangeText={setDime}
                            value={dime}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.container}>

                        <Text style={styles.text}>Quarter</Text>
                        <TextInput
                            style={styles.inputCid}
                            onChangeText={setQuarter}
                            value={quarter}
                        />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.text}>One</Text>
                        <TextInput
                            style={styles.inputCid}
                            onChangeText={setOne}
                            value={one}
                        />
                    </View>
                    <View style={styles.container}>

                        <Text style={styles.text}>Five</Text>
                        <TextInput
                            style={styles.inputCid}
                            onChangeText={setFive}
                            value={five}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'column' }}>

                    <View style={styles.container}>

                        <Text style={styles.text}>Ten</Text>
                        <TextInput
                            style={styles.inputCid}
                            onChangeText={setTen}
                            value={ten}
                        />
                    </View>
                    <View style={styles.container}>

                        <Text style={styles.text}>Twenty</Text>
                        <TextInput
                            style={styles.inputCid}
                            onChangeText={setTwenty}
                            value={twenty}
                        />
                    </View>
                    <View style={styles.container}>

                        <Text style={styles.text}>One Hundred</Text>
                        <TextInput
                            style={styles.inputCid}
                            onChangeText={setOneHundred}
                            value={oneHundred}
                        />
                    </View>
                </View>

            </View>
            <Button title='Calculate change' color='#2196F3' onPress={handlePress} />
            {change && (change.status === 'OPEN' ?
                <>
                    <Text style={styles.textMark}>Status: {change.status}</Text>
                    {change.change.map(e => {
                        return <Text style={styles.textMark}>{e[0]} = {e[1]}</Text>
                    })}
                </> :
                change.status === 'CLOSED' ?
                    <>
                        <Text style={styles.textMark}>Status: {change.status}</Text>
                        <Text style={styles.textMark}>The change its all the money in draw</Text>
                    </>
                    :
                    <Text style={styles.textMark}>Status: {change.status}</Text>
            )}
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
        width: 300,
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
    textMark: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 600,
        color: '#fff',
        borderRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: '#205020',
    },
    title: {
        fontSize: 24,
        fontWeight: 600,
        margin: 8,
        color: '#5ced64',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 4, height: 4},
        textShadowRadius: 1
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
        width: 120,
        backgroundColor: '#fff'
    },
    inputCid: {
        width: 80,
        borderRadius: 4,
        margin: 8,
        paddingVertical: 2,
        backgroundColor: '#fff'
    },
    boxCid: {
        flexDirection: 'row',
        padding: 8,
        margin: 4,
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
    },
    button: {
        backgroundColor: '#fff'

    }
});