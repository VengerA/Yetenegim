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

import {observer, action, inject } from 'mobx-react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Opening from './opening';
import SignIn from './signin';
import mainPage from './mainPage';

class SignNavigator extends React.Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <NavgiatorContainer/>
    )
  }
}


const Navigator = createStackNavigator({
  opening: {
    screen: Opening
  },
  continueSignIn: {
    screen: SignIn
  },
 anasayfa: {
    screen : mainPage
  }
})

const NavgiatorContainer = createAppContainer(Navigator)

const styles = StyleSheet.create({

})

export default SignNavigator;

