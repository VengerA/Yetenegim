import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import {observer, action, inject } from 'mobx-react';
import Icon from 'react-native-ionicons';
import MainStore from './../mobx/store'
import Header from './header';
import Opening from './opening';
import MainPage from './mainPage';
import UserNavigator from './userNavigator';
import SignIn from './signin';
import VideoUpload from './videoUpload';
import DuyuruNavigator from './duyuruNavigator'
import Premium from './premium';
import SignNavigator from './signNavigator';
import axios from 'axios';
import MainPAgeNavigator from './mainPageNavigator';
import MainPageNavigator from './mainPageNavigator';



class Container extends React.Component {
  constructor(props){
    super(props);
    console.disableYellowBox = true;
    this.state = {
      // showLogin: MainStore.showLogin,
      // showHome: MainStore.showHome,
      // showUser: MainStore.showUser,
      // showPerson: MainStore.showPerson,
      // showAdd: MainStore.showAdd
      isSignIn: true
    }
  }

  checkSignIn = () => {
    if(MainStore.mainUser.name === ''){
      this.setState({isSignIn: false})
    }else {
      this.setState({isSignIn: true})
    }
  }
  render() {
    // const page = () => {
    //   let output = null
    //   if(this.state.showLogin){
    //     output = (
    //       <Opening />
    //     )
    //   }
    //   else{
    //     if(this.state.showHome){
    //       output = (
    //         <View>
    //           <Header />
    //           <MainPage />
              
    //           {/* <SignIn /> */}
    //           <Footer />
    //         </View>
    //       )
    //     }
    //     else if (this.state.showUser){
    //       output = (
    //         <View>
    //           <Header />
    //           <UserPage />
    //           <Footer/>
    //         </View>
    //       )
    //     }
    //     else if(this.state.showAdd){
    //       output = (
    //         <View>
    //           <Header />
    //           <Footer/>
    //         </View>
            
    //       )
    //     }
    //   }
    //   return (output)
    return (
      <AppContainer />
      // <MainPage/>
    )
  }
}

const AppNavigator  = createBottomTabNavigator({
  "Duyuru": {
    screen: DuyuruNavigator,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor:'#579ACF'
      },
      tabBarLabel: "Duyurular",
      tabBarIcon: ({tintColor}) => {
        return(
          <Icon name = "information-circle-outline" color = {tintColor} ></Icon>
        )
      }
    }
  },
  "Ana Sayfa" : {
    screen: MainPageNavigator,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#579ACF'
      },
      tabBarLabel : "Ana Sayfa",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name = "home" color = {tintColor}></Icon>)
      }
    }
  },
  "Video Ekle": {
    screen : VideoUpload,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#579ACF'
      },
      tabBarLabel : "Video Ekle",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name = "add-circle-outline" color = {tintColor}></Icon>)
      }
    }
  },
  "Premium" : {
    screen: Premium,
    navigationOptions: {
      tabBarLabel : "Premium",
      tabBarIcon: () => {
        return (
          <Icon name = "trophy" color = '#FFDF00'></Icon>)
      }
    }

  },
  "Kayit Ol" : {
    screen : SignNavigator,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#579ACF'
      },
      tabBarLabel : "Kayit Ol",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name = "person" color = {tintColor}></Icon>)
      }
    }
  },
})

const AppNavigator2  = createBottomTabNavigator({
  "Duyuru": {
    screen: DuyuruNavigator,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor:'#579ACF'
      },
      tabBarLabel: "Duyurular",
      tabBarIcon: ({tintColor}) => {
        return(
          <Icon name = "information-circle-outline" color = {tintColor} ></Icon>
        )
      }
    }
  },
  "Ana Sayfa" : {
    screen: MainPageNavigator,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#579ACF'
      },
      tabBarLabel : "Ana Sayfa",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name = "home" color = {tintColor}></Icon>)
      }
    }
  },
  "Video Ekle": {
    screen : VideoUpload,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#579ACF'
      },
      tabBarLabel : "Video Ekle",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name = "add-circle-outline" color = {tintColor}></Icon>)
      }
    }
  },
  "Premium" : {
    screen: Premium,
    navigationOptions: {
      tabBarLabel : "Premium",
      tabBarIcon: () => {
        return (
          <Icon name = "trophy" color = '#FFDF00'></Icon>)
      }
    }

  },
  "Kayit Ol" : {
    screen : SignNavigator,
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: '#579ACF'
      },
      tabBarLabel : "Kayit Ol",
      tabBarIcon: ({tintColor}) => {
        return (
          <Icon name = "person" color = {tintColor}></Icon>)
      }
    }
  },
})

const navigator3 = () => {
  if(MainStore.mainUser.username === ''){
    return(AppNavigator2)
  }
  return (AppNavigator)
}

const AppContainer  = createAppContainer(AppNavigator)

export default Container;

// <View>
      //   {page()}
      //   {/* <View style = {{
      //       flexDirection: "row",
      //       position: 'absolute',
      //       backgroundColor: 'white',
      //       padding: 10,
      //       top: 615
      //   }}>
      //       <TouchableOpacity
      //         style = {styles.icons}
      //       >
      //         <Icon name = "home"></Icon>
      //       </TouchableOpacity>
      //       <TouchableOpacity
      //         style = {styles.icons}
      //       >
      //         <Icon name = "add-circle-outline"></Icon>
      //       </TouchableOpacity>
      //       <TouchableOpacity
      //         style = {styles.icons}
      //         onPress = {() => {this.props.navigation.navigate('Opening')}}
      //       >
      //         <Icon name = "person"></Icon>
      //       </TouchableOpacity>
      //   </View> */}
      // </View>