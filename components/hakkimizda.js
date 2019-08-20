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

class About extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      headerText: 'Yeteneğim'
    }
  }


  render() {
    return (
     <View>
        <Text>Biz Kimiz ?</Text>
        <Text>Yeteneğim, antrenman ve maç videolarınızı yükleyerek antrenör, kulüp temsilcileri ve yetkili personeller tarafından yeteneklerinizin keşfedilmesine olanak tanır.</Text>
        <Text>Yeteneğim, profesyonel kariyerinize olan yolculuğunuzda coğrafi imkansızlıklar ve şans faktörü olmaksızın herkes tarafından görülebilmenizi, mesaj yolu ile hemen iletişime geçebilmenizi ve profesyonellerle tanışabilmenizi sağlar.</Text>
        <Text>Yüklediğiniz her video ana sayfamıza direk düşüp siteye giriş yapan herkes tarafından izlenmektedir. Amacımız; Türk futbolunda kaybolan binlerce yeteneğin kendini ispatlamasını sağlamaktır.</Text>
        <Text>Bu platform; sizin ve Türk futbolunun geleceği için kurulmuştur, yetenegim.net web sitesini ziyaret eden antrenör ve oyuncu sayısı her geçen gün artmakta olup, daha da artması için çalışmalarımız aralıksız devam etmektedir.</Text>
        <Text>Temennimiz; Türk futbolunun hak ettiği noktaya ulaşmasıdır.Hepinize en içten dileklerimizle bol şans diliyoruz !</Text>
     </View>
    )
  }
}


const styles = StyleSheet.create({

})

export default About;

