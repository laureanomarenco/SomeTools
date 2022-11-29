import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <View style={styles.container}>
                <Image style={styles.icon} source={require('../../assets/favicon.png')}/>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <Text style={styles.text}>SomeTools</Text>
            </Link>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'top',
    },
    text: {
        fontFamily: '',
        fontSize: 40,
        fontWeight: 800,
        color: '#fff',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: 4, height: 4},
        textShadowRadius: 1
    },
    icon: {
        height: 50,
        width: 50,
        margin: 16,
    },
});
