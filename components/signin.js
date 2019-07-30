import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Picker,
  ScrollView,
  MultipleChoice
} from 'react-native';

import Video from 'react-native-video';
import Icon from 'react-native-ionicons';
import {observer, action, inject } from 'mobx-react';
import MainStore from './../mobx/store';
import { black } from 'ansi-colors';


@observer 
class SignIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        brans: "Futbolcu",
        newUser: {
            brans: 'brans',
            lig: 'lig'
        },
        
    }
  }
  addName = (input) => {
      this.state.newUser.name = input
  }
  addSurname = (input) => {
      this.setState(newUser.surname = input)
  }
  updateBrans = (brans) => {
      this.state.newUser.brans = brans
  }
  addGender = (input) => {
      this.state.newUser.gender = input
  }
  addCity =(input) => {
      this.state.newUser.city = input
  }
  // Antranorler
  addGecmisKulup = (kulup) =>{
      this.state.newUser.GecmisKulup = kulup
  }
  addSertifika = (input) => {
      this.state.newUser.sertifikalar = input 
  }
  addTffLink = (input) => {
      this.state.newUser.tffLink = input 
  }
  //Kuliup Personeli 
  addPozisyon = (input) => {
      this.state.newUser.workingPosition = input
  }
  //Futbolcu 
  addbirthDay = (input) => {
      this.state.newUser.birthDay = input
  }
  addWeight = (input) => {
      this.state.newUser.weight = input
  }
  addHeight = (input) => {
      this.state.newUser.height = input
  }
  addUsedLeg = (input) => {
      this.state.newUser.usedLeg = input
  }
  addLeauge = (input) => {
      this.state.newUser.leauge = input
  }
  addLisansNumber = (input) => {
      this.state.newUser.LisansNumber = input
  }
  addTffLisansNo = (input) => {
      this.state.newUser.tffLisans = input
  }
  

  createNewUser = (user) =>{
      MainStore.mainUser = {
          ...MainStore.mainUser,
          user
      }
  }



  render() {
      const signin = () => {
          let output = null
          const brans = this.state.brans
        if(brans === "Antrenor"){
            output = (
                <View>
                    <View   style = {styles.container}>
                        <Text>Gecmis Kulupler</Text>
                        <TextInput 
                            placeholder = "Gecmis Kulupler"
                            style = {styles.input}
                        />
                    </View>
                    <View   style = {styles.container}>
                        <Text>Sertifikalar</Text>
                        <TextInput 
                            placeholder = "Sertifikalar"
                            onChangeText = {(sertifikalar) => {
                                this.state.newUser.sertifikalar = sertifikalar
                            }}
                            style = {styles.input}
                        />
                    </View>
                    <View   style = {styles.container}>
                        <Text>TFF linki</Text>
                        <TextInput 
                            placeholder = "TFF Linki"
                            style = {styles.input}
                        />
                    </View>
                </View>
            )
        }
        else if(brans === 'Kulup Personeli'){
            output = (
                <View style = {styles.container}>
                    <Text style = {styles.texts}>Calistigi Pozisyon</Text>
                    <TextInput 
                        placeholder = "Calistigi Pozisyon"
                        style = {styles.input}
                    />
                </View>
            )
        }
        else if( brans === "Futbolcu"){
            output = (
                <View>
                    {/* <View style = {styles.container}>
                        <Text>Mevki</Text>
                        {/* <MultipleChoice
                            options = {[
                                'Kaleci',
                                'Stoper',
                                'Sağ Bek',
                                'Sol Bek',
                                'Ön Libero',
                                'Defansif Orta Saha',
                                'Ofansif Orta Saha',
                                'Orta Saha',
                                'Sağ Kanat',
                                'Sol Kanat',
                                'Kanat Forvet',
                                'Forvet',
                                'Santrafor'
                            ]}
                        /> */}
                    {/* </View> */}
                    <View   style = {styles.container}>
                        <Text style = {styles.texts}>Dogum Yili</Text>
                        <TextInput 
                            placeholder = 'Dogum Yili'
                            style = {styles.input}
                        />
                    </View>
                    <View style = {styles.container}>
                        <Text style = {styles.texts}>Boy</Text>
                        <TextInput 
                            placeholder = 'Boy'
                            style = {styles.input}
                        />
                    </View>
                    <View style = {styles.container}>
                        <Text style = {styles.texts}>Kilo</Text>
                        <TextInput 
                            placeholder = "Kilo"
                            style = {styles.input}
                        />
                    </View>
                    <View style = {styles.container}>
                        <Text>Kullandigi Ayak</Text>
                        <Picker>
                            <Picker.Item label = "Sag" value = "Sag" />
                            <Picker.Item label = "Sol" value = "Sol" />
                        </Picker>
                    </View>
                    <View style = {styles.container}>
                        <Text style = {styles.texts}>Lig</Text>
                        <TextInput 
                            placeholder = "Lig"
                            style = {styles.input}
                            onChangeText ={(input) => {
                                this.setState(this.setState(newUser.lig = input))
                            }}
                        />
                    </View>
                    <View   style = {styles.container}>
                        <Text   style = {styles.texts}>Kulup</Text>
                        <TextInput 
                            placeholder = "Kulup"
                            style = {styles.input}
                            onChangeTExst = {(input) => {
                                this.setState(newUser.kulup = input)
                            }}
                        />
                    </View>
                    <View style = {styles.container}>
                        <Text style = {styles.texts}>Lisans No</Text>
                        <TextInput 
                            placeholder = "Lisans No"
                            style = {styles.input}
                        />
                    </View>
                    <View style = {styles.container}>
                        <Text style = {styles.text}>TFF Lisans Numarasi:</Text>
                        <TextInput 
                            placeholder = "TFF Lisans Numarasi"
                            style = {styles.input}
                        />
                    </View>
                </View>
            )
        }
        else if(brans === "Menajer"){
            output = (
                <View   style = {styles.container}>
                    <Text>TFF linki</Text>
                    <TextInput 
                        placeholder = "TFF Linki"
                        style = {styles.input}
                    />
                </View>
        )
        }
        return (output)
      }
    
    return (
        <ScrollView>
            <View>
                <View style = {styles.container}>
                    <Text style = {styles.texts}>Isim</Text>
                    <TextInput 
                        placeholder = "Isim"
                        style = {styles.input}
                        onChangeText = {(input) => {
                            this.addName(input)
                        }}
                    />
                </View>
                <View   style = {styles.container}>
                    <Text   style = {styles.texts}>Soy Isim</Text>
                    <TextInput 
                        placeholder = "Soy Isim"
                        style = {styles.input}
                        onChangeText = {(input) => {
                            this.addSurname(input)
                        }}
                    />
                </View >
            </View>
            
            <View   style = {styles.container}>
                <Text   style = {styles.texts}>Brans</Text>
                <Picker selectedValue = {this.state.newUser.brans} onValueChange = {this.updateBrans} >
                    <Picker.Item label = "Futbolcu" value = "Futbolcu"/> 
                    <Picker.Item label = "Antrenor" value = "Antrenor"/> 
                    <Picker.Item label = "Kulup Personeli" value = "Kulup Personeli"/> 
                    <Picker.Item label = "Sivili Gozlemci" value = "Sivil Gozlemci"/> 
                    <Picker.Item label = "Menajer" value = "Menajer"/> 
                </Picker>
            </View>
            <View   style = {styles.container}>
                <Text   style = {styles.texts}>Cinsiyet</Text>
                <Picker selectedValue = {this.state.newUser.gender}>
                    <Picker.Item value = "Erkek" label = "Erkek" />
                    <Picker.Item value = "Kadin" label = "Kadin" />
                </Picker>
            </View>
            <View   style = {styles.container}>
                <Text   style = {styles.texts}>Sehir</Text>
                <TextInput 
                    placeholder = "Sehir"
                    style = {styles.input}
                    onChangeText = {(input) => {this.addCity(input)}}
                />
            </View>
            {signin()}
            <TouchableOpacity style = {styles.submit}
                onPress = {() => {
                    this.createNewUser(this.state.newUser)
                }}
            >
                <Text style = {styles.submitText}>Kaydi Tamamla</Text>
            </TouchableOpacity>
        </ScrollView>
    )   
  }
}

const styles = StyleSheet.create({
    isim: {
        flexDirection: 'row'
    },
    container: {
        top: 40,
        borderWidth: 1,
        borderRadius: 10,
        width: 300,
        left: 40,
        padding: 10,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        backgroundColor: 'white'
    },
    texts: {
        fontSize: 16,
        left : 20,
        color: 'black'

    },
    input: {
        color: '#c1c0c0',
        marginTop: 10,
        marginBottom: 10,
        left: 20
    },  
    submit : {
        borderWidth: 1,
        borderColor: '#579ACF',
        borderRadius: 20,
        width: 150,
        height: 40,
        top: 60,
        marginBottom: 250,
        left: 120
    },
    submitText:{
        top: 10,
        left: 25
    },
    empty:{
        height: 300
    }
})

export default SignIn;

