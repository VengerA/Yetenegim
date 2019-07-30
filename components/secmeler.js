import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  SafeAreaView
} from 'react-native';
import Header from './header';
import {observer, action, inject } from 'mobx-react';

class Secmeler extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      headerText: 'Yeteneğim'
    }
  }


  render() {
    return (
        <View>
            <Header />
        </View>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#579ACF',
    zIndex: 1
  },
  Logo: {
    width: 50,
    height: 50,
    left: 20,
    borderWidth: 0,
    borderRadius: 25
  },
  yetenegim: {
    width: "100%",
    paddingLeft: "23%",
    top: 10,
    fontSize: 24,
    fontWeight: 'bold',
    height: 30

  }
})

export default Secmeler;

