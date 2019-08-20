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
import Header from './header';
import {observer, action, inject } from 'mobx-react';

class About extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      headerText: 'Yeteneğim'
    }
  }


  render() {
    return (
        <ScrollView>
          <Text style = {styles.text}>Yeteneğim, antrenman ve maç videolarınızı yükleyerek antrenör, kulüp temsilcileri ve yetkili personeller tarafından yeteneklerinizin keşfedilmesine olanak tanır.</Text>
          <Text style = {styles.text}>Yeteneğim profesyonel kariyerinize olan yolculuğunuzda coğrafi imkansızlıklar ve şans faktörü olmaksızın herkes tarafından görülebilmenizi, mesaj yolu ile hemen iletişime geçebilmenizi ve profesyoneller ile tanışabilmenizi sağlar.</Text>
          <Text style = {styles.text}>Yüklediğiniz her video ana sayfamıza direk düşüp uygulamamıza giriş yapan herkes tarafından izlenmektedir. Amacımız, Türk Futbolunda kaybolan binlerce yeteneğin kendini ispatlamasını sağlamaktır.</Text>
          <Text style = {styles.text}>Bu platform; sizin ve Türk futbolunun geleceği için kurulmuştur, Yeteneğim uygulamamızı ziyaret eden antrenör ve oyuncu sayısı her geçen gün artmakta olup, daha da artması için çalışmalarımız aralıksız devam etmektedir.</Text>
          <Text style = {styles.text}>Temennimiz, Türk Futbolunun hak ettiği noktaya ulaşmaısıdr. Hepinize en içten dileklerimizle bol şans diliyoruz.</Text>
        </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    padding: 10
  }
})

export default About;

