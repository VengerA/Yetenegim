import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-ionicons';
import {observer, action, inject } from 'mobx-react';
import MainStore from './../mobx/store';
import { black } from 'ansi-colors';
import MainPage from './mainPage';
import Header from './header';
import { Rating, AirbnbRating } from 'react-native-ratings';
import PersonVideos from './personVideos';
import Takipciler from './takipciler'


@observer 
class userPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showProfil : true,
      showGonderiler: false,
      showFriends: false,
      visible: false,
    }
  }

  toggleShowProfil = () => {
    this.setState({showProfil: true}),
    this.setState({showGonderiler:false}),
    this.setState({showFriends: false})
  }
  toggleShowGonderiler = () => {
    this.setState({showProfil: false}),
    this.setState({showGonderiler: true}),
    this.setState({showFriends: false})
  }
  toggleShowFriends = () => {
    this.setState({showProfil: false}),
    this.setState({showGonderiler: false}),
    this.setState({showFriends: true})
  }
  render() {
    const ratePerson = () => {
      let output = null 
      if (MainStore.mainUser.isPremium){
        output = (
          <View style = {styles.rating}>
              <Rating
                type='star'
                ratingCount={10}
                imageSize={20}
                onFinishRating={this.ratingCompleted}
              />
          </View>
        )
      }
      return (output)
    }
    const arr = () => {
      let output = null 
      if (this.state.showGonderiler){
        output = (
          <View style = {{top: 100}}>
            <View style = {{height: 250, marginBottom: 100}}>
              {/* <PersonVideos/> */}
            </View>
          </View>
        )
      }
      else if (this.state.showProfil) {
        output = (
          <ScrollView style = {styles.profilYazi}>
            <Text style= {styles.gonderiText}> Kullanıcı Adı: {MainStore.mainUser.username}</Text>
            <Text style= {styles.gonderiText}> İsim: {MainStore.mainUser.name}</Text>
            <Text style= {styles.gonderiText}> Soy isim: {MainStore.mainUser.surname}</Text>
            <Text style= {styles.gonderiText}> Cinsiyet: {MainStore.mainUser.gender}</Text>
            <Text style= {styles.gonderiText}> Kulüp: {MainStore.mainUser.club}</Text>
            <Text style= {styles.gonderiText}> Şehir: {MainStore.mainUser.city}</Text>
            <Text style= {styles.gonderiText}> Doğum Tarihi: {MainStore.mainUser.birthDay}</Text>
            <Text style= {styles.gonderiText}> Boy: {MainStore.mainUser.height}</Text>
            <Text style= {styles.gonderiText}> Kilo: {MainStore.mainUser.weight}</Text>
            <Text style= {styles.gonderiText}> Ayak: {MainStore.mainUser.foot}</Text>
            <View style = {{height: 450}}></View>
          </ScrollView>
        )
      }
      else if(this.state.showFriends){
        output =  (
          <View>
            <Takipciler/>
          </View> 
        )
      }
      return(output) 
    }
    
    return (
      <View>
        <Header />
        <View style = {styles.personView}>
          <View style = {styles.profilFoto}>
            <Icon name = 'person' 
              style = {styles.personIcon}
              resizeMode = "strech"
            ></Icon>
          </View>
          <Text 
            style = {styles.name}
          >@{MainStore.mainUser.surname}</Text>
        </View>
        
        {/* <View 
          style = {styles.profilHeaders}
        > 
          {/* <TouchableOpacity style = {styles.headerIcons}
            onPress = {() => {
              this.toggleShowGonderiler()}}
          >
              <Icon name = 'menu' style = {styles.Icon}></Icon>
              <Text style = {styles.headerIconText}>Gonderiler</Text>
          </TouchableOpacity> 
          <TouchableOpacity style = {styles.headerIcons}
            onPress = {() => {
              this.toggleShowProfil()}}
          >
            <Icon name = 'person' style = {styles.Icon}></Icon>
            <Text style = {styles.headerProfil}>Profil</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style = {styles.headerIcons}
            onPress = {() => {
              this.toggleShowFriends()}}
          >
            <Icon name = 'people' style = {styles.Icon}></Icon>
            <Text style = {styles.headerIconText}>Takip Edilenler</Text>
          </TouchableOpacity> 
        </View> */}
        {arr()}
      </View>
    )   
  }
}

const styles = StyleSheet.create({
  personView: {
    top: 30
  },  
  profilFoto: {
    alignSelf: 'center',
    height: 150,
    width: 150,
    borderWidth: 1,
    borderRadius: 75,
    fontSize: 200
  },
  personIcon: {
    left: 20,
    top: -13,
    fontSize: 150
  },
  name: {
    alignSelf: "center",
    top: 20
  },
  profilHeaders: {
    flexDirection: 'row',
    top: 80
  },
  headerIcons: {
    width: "100%",
    textAlign: "center",
    justifyContent: 'center'
  },
  Icon: {
    textAlign: "center"
  },
  headerIconText: {
    textAlign: "center"
  },
  headerProfil: {
    left: -5,
    textAlign: 'center'
  },
  profilYazi: {
    alignSelf: 'stretch',
    top: 100,
    width: "90%",
    // height: 300,
    marginHorizontal : "5%"
  },
  gonderiText: {
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#F9F9F9',
    marginVertical: "1%",
    borderColor: '#579ACF'
  },
  rating: {
    position: "absolute",
    top: '60%',
    left: '22%'
  }
})


export default userPage;

