import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  Picker
} from 'react-native';
import {observer, action, inject } from 'mobx-react';
import Icon from 'react-native-ionicons';
import MainStore from './../mobx/store';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';


@observer
class Opening extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showLogIn: false,
            showSign: true,
            email: 'email',
            passwd: 'password',
            password2: 'passwordAgain',
            date: "2019-07-30",
            city: "Ankara",
            logUser:{
            },
            user:{},
            response: null,
            brans: 'Futbol Oyuncusu',
            gender : 'Erkek',
            newUser: {
                gender: "M",
                type:"FP",
            },
            cityList: []
        }
    }

    clickEventLogIn = () => {
        this.setState({showLogIn: true})
        this.setState({showSign: false })
    }

    clickEventSignIn = () => {
        this.setState({showLogIn: false})
        this.setState({showSign: true})
    }

    takeUserData = (id) => {
        axios.get('http://18.191.4.87/api/accounts/users/' + id.toString() + '/', {
            headers: {
                Authorization: 'Token ' + MainStore.mainUserToken 
            }
        })
        .then(response => {
            MainStore.mainUser = response.data
            this.props.navigation.navigate("App")
        })
    }
    
    giveToken = (token)  => {
        MainStore.mainUserToken = token
    }

    logInUser = () => {
        let addUser = {
            username: this.state.email,
            passwd: this.state.passwd
        }
        axios.post('http://18.191.4.87/api/accounts/auth/login/', addUser)
        .then(response => {
            this.giveToken(response.data.token)
            this.takeUserData(response.data.id) 
            Alert.alert("Yeteneğime Hoşgeldiniz")
        })
        .catch((error) => {
            Alert.alert('Lütfen İnternet Bağlantınızı Kullanıcı Adınızı ve şifrenizi Kontrol Ediniz')
        })
        
    }

    cityArr = () => {
        axios.get('http://18.191.4.87/api/accounts/cities/')
        .then(response => {
            MainStore.cityList = response.data
        })
    }

    componentWillMount(){
        this.cityArr()
    }

    addUsername = (input) => {
        this.state.newUser.username = input
      }
    addName = (input) => {
        this.state.newUser.name = input
    }
    addSurname = (input) => {
        this.state.newUser.surname = input
    }
    updateBrans = (brans) => {
        this.setState({brans:brans})
        if(brans === ''){
            Alert.alert('Branş Kısmı Boş kalamaz')
        }
        if(brans === 'Futbol Oyuncusu'){
            this.state.newUser.type = "FP"
        }
        if(brans === 'Sivil Gozlemci'){
            this.state.newUser.type = "CV"
        }
        if(brans === 'Kulup Presoneli'){
            this.state.newUser.type = "CP"
        }
        if(brans === 'Antrenör'){
            this.state.newUser.type = "AN"
        }
        if(brans === 'Menajer'){
            this.state.newUser.type = "MN"
        }
    }
    addGender = (input) => {
        if(input === 'Erkek'){
        this.setState({gender: input})
        this.state.newUser.gender = 'M'
        }
        else {
        this.setState({gender: input})
        this.state.newUser.gender = 'F'
        }
    }
    addCity =(input) => {
        this.setState({city: input})
        this.state.newUser.city = input
    }
    // Antranorler
    addGecmisKulup = (kulup) =>{
        this.state.newUser.club = kulup
    }
    addSertifika = (input) => {
        this.state.newUser.sertifikalar = input 
    }
    addTffLink = (input) => {
        this.state.newUser.tffLink = input 
    }
    //Kuliup Personeli 
    addPozisyon = (input) => {
        this.state.newUser.position = input
    }
    //Futbolcu 
    addbirthDay = (input) => {
        this.state.newUser.birthDate = input
    }
    addWeight = (input) => {
        this.state.newUser.weight = input
    }
    addHeight = (input) => {
        this.state.newUser.height = input
    }
    addUsedLeg = (input) => {
        this.state.newUser.foot = input
        this.setState({foot: input})
    }
//   addLeauge = (input) => {
//       this.state.newUser.leauge = input
//   }
    addLisansNumber = (input) => {
        this.state.newUser.licenseNumber = input
    }
    addTffLisansNo = (input) => {
        this.state.newUser.tffLisans = input
    }
    
    
    addNewUser = () => {
        let newUser = {
        ...this.state.user,
        ...this.state.newUser
        }
        axios.post('http://18.191.4.87/api/accounts/auth/register/', newUser)
        .then(response => {
            MainStore.mainUserToken = response.data.token
            this.takeUserData(response.data.id)
            this.props.navigation.navigate("App")
            Alert.alert("Yetenegime Hosgeldiniz")
        })
        .catch(Alert.alert("Eger ki Giris Yapmazsa Lutfen Tekrar Deneyiniz"))
    }

    
  render() {
    const signin = () => {
        let output = null
        const brans = this.state.brans
      if(brans === "Antrenor"){
          output = (
              <View style = {{top: 10}}>
                    <View   style = {styles.container}>
                      <Text>Geçmiş Kulüpler</Text>
                      <TextInput 
                          placeholder = "Geçmiş Kulüpler"
                          style = {styles.input}
                          onChangeText = {(Kulup) => {
                              this.addGecmisKulup(Kulup)
                          }}
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
                      <Text>TFF Linki</Text>
                      <TextInput 
                          placeholder = "TFF Linki"
                          style = {styles.input}
                          onChangeText = {(text) => {
                              this.addTffLink(text)
                          }}
                      />
                  </View> 
              </View>
          )
      }
      else if(brans === 'Kulup Personeli'){
          output = (
              <View style = {styles.container}>
                  <Text style = {styles.texts}>Çalıştığı Pozisyon</Text>
                  <TextInput 
                      placeholder = "Calıştığı Pozisyon"
                      style = {styles.input}
                      onChangeText = {(input) => {
                          this.addPozisyon(input)
                      }}
                  />
              </View>
          )
      }
      else if( brans === "Futbol Oyuncusu"){
          output = (
              <View style = {{top: 10}} >
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
                      <Text style = {styles.texts}>Doğum Tarihi</Text>
                      <DatePicker
                        style={{width: 200}}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="1900-01-01"
                        maxDate="2019-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(date) => {
                            this.state.newUser.birthDate = date
                            this.setState({date: date})
                        }}
                        />
                  </View>
                  <View style = {styles.container}>
                      <Text style = {styles.texts}>Boy</Text>
                      <TextInput 
                          placeholder = 'Boy'
                          style = {styles.input}
                          onChangeText = {(input) => {
                              this.addHeight(input)
                          }}
                      />
                  </View>
                  <View style = {styles.container}>
                      <Text style = {styles.texts}>Kilo</Text>
                      <TextInput 
                          placeholder = "Kilo"
                          style = {styles.input}
                          onChangeText = {(input) => {
                              this.addWeight(input)
                          }}
                      />
                  </View>
                  <View style = {styles.container}>
                        <Text>Kullandığı Ayak</Text>
                        <Picker selectedValue = {this.state.foot} 
                            selectedValue = {this.state.foot}
                            onValueChange = {input => 
                                this.addUsedLeg(input)
                            }
                        >
                          <Picker.Item label = "Sağ" value = "Sağ" />
                          <Picker.Item label = "Sol" value = "Sol" />
                      </Picker>
                    </View>
                    <View style = {styles.container}>
                      <Text style = {styles.texts}>Lig</Text>
                      <TextInput 
                          placeholder = "Lig"
                          style = {styles.input}
                          onChangeText ={(input) => {this.state.newUser.leauge = input}}
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
                          onChangeText = {(input) => {
                              this.addTffLisansNo(input)
                          }}
                      />
                  </View>
                  {/* <View style = {styles.container}>
                      <Text style = {styles.text}>TFF Lisans Numarasi:</Text>
                      <TextInput 
                          placeholder = "TFF Lisans Numarasi"
                          style = {styles.input}
                          onChange
                      />
                  </View> */}
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
                       onChangeText = {(input) => {
                            this.state.newUser.tffLink = input
                       }}
                    />
                </View>
      )
      }
      return (output)
    }

    
    const arr2 = MainStore.cityList.map(item => {
            output = ((
                <Picker.Item label = {item.name} value = {item.name}/> 
            ))
        return output
    })
    

    const  opening = () => {
        let output = null
        if(this.state.showLogIn){
            output = (
                <View
                    style = {styles.logIn}
                >
                    <View style = {styles.row}>
                        <Icon name = 'person' style = {styles.icon}></Icon>
                        <TextInput
                            style = {styles.input1}
                            placeholder = "Kullanıcı Adı"
                            onChangeText = {(email) => {
                                this.setState({email: email})
                            }}
                        />
                    </View>
                    <View style = {styles.row}>
                        <Icon name = 'lock' style= {styles.icon}></Icon>
                        <TextInput 
                            style = {styles.input1}
                            secureTextEntry={true}
                            placeholder = "Şifre"
                            onChangeText = {(password) => {
                                this.setState({passwd: password})
                            }}
                        />
                    </View>
                    <TouchableOpacity style = {styles.submit} 
                        onPress = {() => {
                            this.logInUser()
                        }}       
                    >
                        <Text style = {styles.submitText}>Giriş Yap</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else if(this.state.showSign){
            output = (
                <ScrollView 
                    style = {styles.signIn}
                >
                    <View style = {styles.row}>
                        <Icon name = "person" style = {styles.icon}></Icon>
                        <TextInput 
                            style = {styles.input1}
                            placeholder = "E-mail"
                            onChangeText = {(email) => {
                                this.state.user.email = email
                            }}
                        />
                    </View>
                    <View style = {styles.row}>
                        <Icon name = "lock" style = {styles.icon}></Icon>
                        <TextInput 
                            style = {styles.input1}
                            placeholder = "Şifre"
                            secureTextEntry={true}
                            onChangeText = {(password) => {
                                this.state.user.passwd = password
                            }}
                        />
                    </View>
                    <View style = {styles.row}>
                        <Icon name = "lock" style = {styles.icon}></Icon>
                        <TextInput 
                            style = {styles.input1}
                            placeholder = "Şifre Tekrardan"
                            secureTextEntry={true}
                            onChangeText = {(password2) => {
                                this.setState({password2 : password2})
                            }}
                        />
                    </View>

                        <View>
                            <View style = {styles.container}>
                                <Text style = {styles.texts}>Kullanıcı Adı</Text>
                                <TextInput 
                                    placeholder = "Kullanıcı Adı"
                                    style = {styles.input}
                                    onChangeText = {(input) => {
                                        this.addUsername(input)
                                    }}
                                />
                            </View>
                            <View style = {styles.container}>
                                <Text style = {styles.texts}>İsim</Text>
                                <TextInput 
                                    placeholder = "İsim"
                                    style = {styles.input}
                                    onChangeText = {(input) => {
                                        this.addName(input)
                                    }}
                                />
                            </View>
                            <View   style = {styles.container}>
                                <Text   style = {styles.texts}>Soy İsim</Text>
                                <TextInput 
                                    placeholder = "Soy İsim"
                                    style = {styles.input}
                                    onChangeText = {(input) => {
                                        this.addSurname(input)
                                    }}
                                />
                            </View >
                        </View>
                        
                        <View   style = {styles.container}>
                            <Text   style = {styles.texts}>Brans</Text>
                            <Picker selectedValue = {this.state.brans} onValueChange = {input => this.updateBrans(input)} >
                                <Picker.Item label = "Futbol Oyuncusu" value = "Futbol Oyuncusu"/> 
                                <Picker.Item label = "Antrenör" value = "Antrenör"/> 
                                <Picker.Item label = "Kulüp Personeli" value = "Kulüp Personeli"/> 
                                <Picker.Item label = "Sivil Gozlemci" value = "Sivil Gozlemci"/> 
                                <Picker.Item label = "Menajer" value = "Menajer"/> 
                            </Picker>
                        </View>
                        <View   style = {styles.container}>
                            <Text   style = {styles.texts}>Cinsiyet</Text>
                            <Picker selectedValue = {this.state.gender} onValueChange = {(input) => {this.addGender(input)}}>
                                <Picker.Item value = "Erkek" label = "Erkek" />
                                <Picker.Item value = "Kadın" label = "Kadın" />
                            </Picker>
                        </View>
                        <View   style = {styles.container}>
                            <Text   style = {styles.texts}>Şehir</Text>
                            <Picker 
                                selectedValue = {this.state.city}
                                onValueChange = {input => {
                                    this.addCity(input)
                                }   
                                }>
                                {arr2}
                            </Picker>
                        </View>
                        {/* <View style = {{height: 50, marginBottom: 40}}></View> */}
                        {signin()}
                        <TouchableOpacity style = {styles.submit}
                            onPress = {() => {
                                this.addNewUser()
                            }}
                        >
                            <Text style = {styles.submitText2}>Kaydı Tamamla</Text>
                        </TouchableOpacity>    
                        <View style = {{height: 200}}></View>
                </ScrollView>
            )
        }
        return (output)
    }
    

    return (
        <View>
            <View
                style = {styles.openning}
            >
                <Image 
                    source= {require('./../static/yetenegimLogo.jpeg')}
                    style={{ width: 150, height: 150, marginLeft: '33%', marginRight: 100 }}
                    
                />
                <Text style = {styles.header1}>Yeteneğim</Text>
                <View style = {styles.container1}>
                    <TouchableOpacity
                        style = {styles.openingButtons3}
                        onPress = {() => {
                            this.clickEventLogIn()
                            opening()
                        }}
                    ><Text
                        style = {styles.buttonText1} 
                    >Giriş Yap</Text></TouchableOpacity>
                    <TouchableOpacity
                        title = "Sign In"
                        style = {styles.openingButtons4}
                        onPress = {() => {
                            this.clickEventSignIn()
                        }}
                    >
                        <Text
                            style = {styles.buttonText1}
                        >Kayıt Ol</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            {opening()}
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container1: {
        flexDirection: "row"
    },
    header1: {
        textAlign: "center",
        fontSize: 48,
        fontWeight: 'bold'
    },
    openning: {
        top: 40,
        left: 0
    },
    row: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#579ACF',
        borderRadius: 20,
        width: 300,
        left: 40,
        marginTop: 20
    },
    icon: {
        left: 20,
        fontSize: 36
    },
    input1:{
        left: 40,
        width: "70%"
    },
    openingButtons3: {
        flexDirection: "row",
        borderRadius: 20,
        borderWidth: 1,
        width: 100,
        height: 40,
        left: 40,
        top: 10,
        borderColor: '#579ACF',
        marginBottom: 20
    },
    openingButtons4: {
        flexDirection: "row",
        borderRadius: 20,
        borderWidth: 1,
        width: 100,
        height: 40,
        left: 130,
        top: 10,
        borderColor: '#579ACF',
        marginBottom: 20
    },
    buttonText1: {
        top: 10,
        color:'#579ACF',
        left: "50%"
    },
    logIn: {
        top: 70
    },
    signIn: {
        top: 50,
        textAlign: 'left',
        left: 0
    },
    submit: {
        borderRadius: 20,
        borderWidth: 1,
        width: "30%",
        height: 40,
        left: 135,
        borderColor: '#579ACF',
        top: 20
    },
    submitText: {
        top: 10,
        left: "30%"
    },
    submitText2: {
        top: 10,
        left: "18%"
    },
    isim: {
        flexDirection: 'row'
    },
    container: {
        top: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor:'#579ACF',
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
    empty:{
        height: 300
    }
})

export default Opening;
