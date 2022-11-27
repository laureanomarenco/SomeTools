import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-dom'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdPrecisionManufacturing } from 'react-icons/md'
import { VscSymbolNumeric } from 'react-icons/vsc'
import { FaCashRegister } from 'react-icons/fa'

export default function Home() {
    return (
        <View style={styles.container}>
            <Link to='/palindrome' style={{ textDecoration: 'none' }}>
                <View style={styles.box}>
                    <AiFillCheckCircle style={styles.icon} />
                    <Text style={styles.text}>Palindrome Checker</Text>
                </View>
            </Link>
            <Link to='/clipher' style={{ textDecoration: 'none' }}>
                <View style={styles.box}>
                    <MdPrecisionManufacturing style={styles.icon} />
                    <Text style={styles.text}>Caesars Clipher</Text>
                </View>
            </Link>
            <Link to='/romanConverter' style={{ textDecoration: 'none' }}>
                <View style={styles.box}>
                    <VscSymbolNumeric style={styles.icon} />
                    <Text style={styles.text}>Roman Numeral Converter</Text>
                </View>
            </Link>
            <Link to='/cashRegister' style={{ textDecoration: 'none' }}>
                <View style={styles.box}>
                    <FaCashRegister style={styles.icon}/>
                    <Text style={styles.text}>Cash Register</Text>
                </View>
            </Link>
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
    icon: {
        color: '#809980',
        height: 40,
        width: 40,
        margin: 8,
    }
});
