import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  SafeAreaView,
  ScrollView
} from 'react-native';

import {observer, action, inject } from 'mobx-react';
import MainStore from './../mobx/store'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Takipciler extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      headerText: 'Yeteneğim'
    }
  }


  render() {
      const arr = MainStore.mainUser.friends.map(friend => {
          return(
            <View style = {styles.container}>
                <View style = {styles.names}>
                    <Text style = {styles.name}>{friend.name}</Text>
                    <Text style = {styles.username}>@{friend.username}</Text>
                </View>
                <TouchableOpacity 
                    onPress = {() => {
                        MainStore.clickedUser = friend
                    }}
                    style = {styles.button}
                >
                    <Text style = {{color: '#579ACF', fontWeight: 'bold'}}> Profile Git </Text>
                </TouchableOpacity>
            </View>  
          )
      })
    return (
      <ScrollView style = {styles.row}>
          {arr}
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
      height: 60,
      width: '90%',
      borderWidth: 1,
      borderRadius: 12, 
      borderColor: '#579ACF',
      flexDirection: 'row',
      left: '35%'
  },
  row: {
      top: 100
  },
  names: {
      flexDirection: 'column',
      flex: 3
  },
  button: {
      fontWeight: 'bold',
      top: '25%',
      flex: 4,
  },
  name: {
    left: '10%',
    fontSize: 24
  },
  username: {
    left: '10%',
    color: 'grey'
  }
})

export default Takipciler;

