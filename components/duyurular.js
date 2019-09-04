import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from 'react-native';
import Icon from 'react-native-ionicons';
import {observer, action, inject } from 'mobx-react';
import Header from './header'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Secmeler from './secmeler';
import About from './about';
import Videos from './videos'

class Duyuru extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        showHowTo: true,
        showDate: false,
    }
  }


  render() {
    return (
        <View>
            <Header />
            <View style = {styles.duyuruHeader}>
                <TouchableOpacity style = {styles.headerButtons}
                    onPress = {() => Alert.alert('Bu Kısım Gelecekte Açılacaktır')}
                >
                    <Text style = {styles.buttonText}>Öğretici Ve Çekebileceğiniz Antrenman Videoları</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.headerButtons}
                    onPress = {() => Alert.alert("Bu Part Gelecekte Açılacaktır")} 
                >
                    <Text style = {styles.buttonText}>Seçmeler</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.headerButtons}
                    onPress = {() => this.props.navigation.navigate('Hakkimizda')}
                >
                    <Text style = {styles.buttonText}>Hakkımızda</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
  }
}



const styles = StyleSheet.create({
    duyuruHeader:{
        height: "90%",
        top: 15    
    },
    headerButtons: {
        height: "27%",
        justifyContent:"center",
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#579ACF',
        marginVertical: 10,
        marginHorizontal: 20
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        color: '#579ACF'
    }
})

export default Duyuru;

