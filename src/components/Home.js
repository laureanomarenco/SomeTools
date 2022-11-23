import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Link to='/palindrome' style={{ textDecoration: 'none' }}>
                    <Text style={styles.text}>Palindrome Checker</Text>
                </Link>
            </View>
            <View style={styles.box}>
                <Link to='/clipher' style={{ textDecoration: 'none' }}>
                    <Text style={styles.text}>Caesars Clipher</Text>
                </Link>
            </View>
            <View style={styles.box}>
                <Link to='/romanConverter' style={{ textDecoration: 'none' }}>
                    <Text style={styles.text}>Roman Numeral Converter</Text>
                </Link>
            </View>
            <View style={styles.box}>
                <Link to='/cashRegister' style={{ textDecoration: 'none' }}>
                    <Text style={styles.text}>Cash Register</Text>
                </Link>
            </View>
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
    box: {
        padding: 8,
        margin: 8
    },
    text: {
        fontSize: 16,
        marginTop: 8,
        color: '#fff',
    }
});
