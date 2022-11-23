import { StyleSheet, Text, View } from 'react-native';

export default function RomanConverter() {
    return (
        <View style={styles.container}>
                <Text style={styles.text}>Palindrome Checker in</Text>
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
    text: {
        marginTop: 8,
        color: '#fff',
    }
});
