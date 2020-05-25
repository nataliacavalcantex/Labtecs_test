import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes'
import SignUp from './src/pages/SignUp'
import { StyleSheet, Text, View,StatusBar } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <SignUp/>
     
   </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
