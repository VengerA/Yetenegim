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
import User from './user';
import  MainStore from './../mobx/store'
// import mainPage from './mainPage';

class UserNavigator extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      headerText: 'Yeteneğim'
    }
  }


  render() {
    const Screen = () => {
        let output = null
         if(MainStore.mainUser.username === ''){
             output = (
                 <Opening />
             )
         }
         else {
             output = (
                 <User />
             )
        }
        output = (
                  <User />
              )
        return (output)
    }
    return (
      <View>
          {Screen()}
      </View>
    )
  }
}

export default UserNavigator;

