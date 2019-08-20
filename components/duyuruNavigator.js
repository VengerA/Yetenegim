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
import Duyurular from './duyurular';
import ExampleVideolar from './examplevideos';
import About from './about'
import { isTSNonNullExpression } from '@babel/types';

class DuyuruNavigator extends React.Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
        <NavgiatorContainer2/>
    )
  }
}


const Navigator = createStackNavigator(
  {
    duyurular: {
      screen: Duyurular,
      navigationOptions: {
        tabBarVisible: false,
        gesturesEnabled: false,
        header: null
      }
    },
    OrnekVideolar: {
      screen: ExampleVideolar,
    },
    Hakkimizda: {
      screen: About,
    }
  },
  {
    initialRouteName: "duyurular"
  }
)

const NavgiatorContainer2 = createAppContainer(Navigator)


export default DuyuruNavigator;

