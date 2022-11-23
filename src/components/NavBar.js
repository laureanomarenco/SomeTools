import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <View style={styles.container}>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <Text style={styles.text}>SomeTools</Text>
            </Link>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 8,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'top',
    },
    text: {
        fontFamily: '',
        fontSize: 24,
        color: '#fff',
    }
});
