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
import userPage from './user'

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
  'Opening': {
    screen: Opening
  },
  'ContinueSignIn': {
    screen: SignIn
  },
  'Profile' : {
    screen: userPage
  }
})

const NavgiatorContainer = createAppContainer(Navigator)

const styles = StyleSheet.create({

})

export default SignNavigator;

