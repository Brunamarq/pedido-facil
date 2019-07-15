import React, {Component} from 'react';
import { StyleSheet, View, Text,} from 'react-native';

//import firebase from './src/FirebaseConnection';

export default class App extends Component{
 render() {
    return (
          <View style={styles.container}>
              <Text>Step One</Text>
          </View>
    );
 }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
   }
});


