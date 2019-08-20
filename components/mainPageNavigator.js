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
import MainPage from './mainPage';
import ClickedUser from './clickedUser'

class MainPageNavigator extends React.Component {
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
  'Main': {
    screen: MainPage,
    navigationOptions: {
      header: null
    }
  },
  'ClickedUser': {
    screen: ClickedUser
  }
})

const NavgiatorContainer = createAppContainer(Navigator)

const styles = StyleSheet.create({

})

export default MainPageNavigator;

