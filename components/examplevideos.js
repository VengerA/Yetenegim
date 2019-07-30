import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  SafeAreaView,
  YouTube
} from 'react-native';

import {observer, action, inject } from 'mobx-react';

class ExampleVideolar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      headerText: 'Yeteneğim'
    }
  }


  render() {
    return (
     <View>
         
     </View>
    )
  }
}


const styles = StyleSheet.create({

})

export default ExampleVideolar;

