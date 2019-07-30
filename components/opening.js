import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import {observer, action, inject } from 'mobx-react';
import Icon from 'react-native-ionicons';
import MainStore from './../mobx/store';
import axios from 'axios';


class Opening extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            showLogIn: false,
            showSign: true,
            email: 'email',
            password: 'password',
            password2: 'passwordAgain',
            logUser:{
                name: 'user',
                passwd: 'asd'
            },
            user:{}
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
    
    logIn = () => {
        MainStore.mainUser.name = 'ufuk'
    }

    logInUser = () => {
        let addUser = {
            "username": this.state.email,
            "passwd": this.state.password
        }
        axios.post('http://ieeemetu.pythonanywhere.com/api/accounts/auth/login/', {addUser})
            .then(this.setState({showSign: true}))
    }

  render() {
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
                            style = {styles.input}
                            placeholder = "E-mail"
                            onChangeText = {(email) => {
                                this.state.logUser.email = email
                            }}
                        />
                    </View>
                    <View style = {styles.row}>
                        <Icon name = 'lock' style= {styles.icon}></Icon>
                        <TextInput 
                            style = {styles.input}
                            secureTextEntry={true}
                            placeholder = "Sifre"
                            onChangeText = {(password) => {
                                this.state.logUser.passwd = password
                            }}
                        />
                    </View>
                    <TouchableOpacity style = {styles.submit} 
                        onPress = {() => {
                            this.logIn()
                        }}       
                    >
                        <Text style = {styles.submitText}>Giris Yap</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        else if(this.state.showSign){
            output = (
                <View 
                    style = {styles.signIn}
                >
                    <View style = {styles.row}>
                        <Icon name = "person" style = {styles.icon}></Icon>
                        <TextInput 
                            style = {styles.input}
                            placeholder = "E-mail"
                            onChangeText = {(email) => {
                                this.setState({email: email})
                            }}
                        />
                    </View>
                    <View style = {styles.row}>
                        <Icon name = "lock" style = {styles.icon}></Icon>
                        <TextInput 
                            style = {styles.input}
                            placeholder = "sifre"
                            secureTextEntry={true}
                            onChangeText = {(password) => {
                                this.setState({password: password})
                            }}
                        />
                    </View>
                    <View style = {styles.row}>
                        <Icon name = "lock" style = {styles.icon}></Icon>
                        <TextInput 
                            style = {styles.input}
                            placeholder = "Sifre Tekrardan"
                            secureTextEntry={true}
                            onChangeText = {(password2) => {
                                this.setState({password2: password2})
                            }}
                        />
                    </View>
                    <TouchableOpacity style = {styles.submit}
                        onPress = {() => {
                            this.props.navigation.navigate('continueSignIn')
                        }}
                    >
                        <Text style = {styles.submitText}>Devam Et</Text>
                    </TouchableOpacity>
                </View>
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
                <Text style = {styles.header}>Yetenegim</Text>
                <View style = {styles.container}>
                    <TouchableOpacity
                        style = {styles.openingButtons1}
                        onPress = {() => {
                            this.clickEventLogIn()
                            opening()
                        }}
                    ><Text
                        style = {styles.buttonText} 
                    >Log In</Text></TouchableOpacity>
                    <TouchableOpacity
                        title = "Sign In"
                        style = {styles.openingButtons2}
                        onPress = {() => {
                            this.logIn()
                        }}
                    >
                        <Text
                            style = {styles.buttonText}
                        >Sign In</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            {opening()}
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    header: {
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
    input:{
        left: 40,
        width: "70%"
    },
    openingButtons1: {
        flexDirection: "row",
        borderRadius: 20,
        borderWidth: 1,
        width: 100,
        height: 40,
        left: 40,
        top: 10,
        borderColor: '#579ACF'
    },
    openingButtons2: {
        flexDirection: "row",
        borderRadius: 20,
        borderWidth: 1,
        width: 100,
        height: 40,
        left: 130,
        top: 10,
        borderColor: '#579ACF'
    },
    buttonText: {
        top: 10,
        left: 30,
        color:'#579ACF'
    },
    logIn: {
        top: 50
    },
    signIn: {
        top: 50,
        textAlign: 'left',
        left: 0
    },
    submit: {
        borderRadius: 20,
        borderWidth: 1,
        width: 100,
        height: 40,
        left: 135,
        borderColor: '#579ACF',
        top: 20
    },
    submitText: {
        top: 10,
        left: 20
    }
})

export default Opening;
