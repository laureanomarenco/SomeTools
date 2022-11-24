import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CashRegister from './src/components/CashRegister';
import Clipher from './src/components/Clipher';
import Home from './src/components/Home';
import NavBar from './src/components/NavBar';
import Palindrome from './src/components/Palindrome';
import RomanConverter from './src/components/RomanConverter';


export default function App() {
  return (
    <View style={styles.container}>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/palindrome' element={<Palindrome />} />
        <Route exact path='/clipher' element={<Clipher />} />
        <Route exact path='/romanConverter' element={<RomanConverter />} />
        <Route exact path='/cashRegister' element={<CashRegister />} />
      </Routes>
      </BrowserRouter>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#153000',
    alignItems: 'center',
    justifyContent: 'top',
  },
  text: {
    marginTop: 8,
    color: '#fff',
  }
});
