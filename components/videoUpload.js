import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  Alert
} from 'react-native';
import {
  DocumentPicker,
  DocumentPickerUtil,
} from 'react-native-document-picker';

let FileUpload = require('NativeModules').FileUpload;

import Header from './header'
import { observer } from 'mobx-react-lite';
import MainStore from './../mobx/store';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
 
class VideoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUri: '',
      fileType: '',
      fileName: '',
      fileSize: '',
      err: null,
      file : null
    };
  }

  componentWillMount(){
    Alert.alert("Video Seçilir Seçilmez Yükleme başlayacaktır")
  }

  handleChange = () => {
    //Opening Document Picker
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.allFiles()],
        //All type of Files DocumentPickerUtil.allFiles()
        //Only PDF DocumentPickerUtil.pdf()
        //Audio DocumentPickerUtil.audio()
        //Plain Text DocumentPickerUtil.plainText()
      },
      (error, res) => {
        if (res === null) {
          Alert.alert("Lütfen Video Seçiniz")
        }
        else {const data = new FormData();
        data.append('owner_id', MainStore.mainUser.id.toString()); // you can append anyone.
        data.append('file', {
          uri: res.uri,
          type: res.type,
          name: res.fileName
        })
        axios.post('http://18.191.4.87/api/media/upload/video/', data, {
            headers: {
                Authorization: 'Token ' + MainStore.mainUserToken,
                "Content-Type": "multipart/form-data",
              }
            })
        .then(response => {
            this.setState({err: response})
            Alert.alert("Yükleme Başarılı")
        })
        .catch(err => {this.setState({err: err})})}
      })
    }

  uploadFile = () => {
    let formdata = new FormData()
    formdata.append('owner_id', MainStore.mainUser.id.toString())
    formdata.append('file', this.state.file)

    Alert.alert(JSON.stringify(formdata))

  }
  
 
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{ alignItems: 'center' }}
            onPress={this.handleChange.bind(this)}>
            <Image
              source={{
                uri:
                  'https://aboutreact.com/wp-content/uploads/2018/09/clips.png',
              }}
              style={styles.ImageIconStyle}
            />
            <Text style={{ marginTop: 10 }}>Add Attachment</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            {this.state.fileUri ? 'URI\n' + this.state.fileUri : ''}
          </Text>
          <Text style={styles.text}>
            {this.state.fileType ? 'Type\n' + this.state.fileType : ''}
          </Text>
          <Text style={styles.text}>
            {this.state.fileName ? 'File Name\n' + this.state.fileName : ''}
          </Text>
          <Text style={styles.text}>
            {this.state.fileSize ? 'File Size\n' + this.state.fileSize : ''}
          </Text>
          <View style = {styles.container}>
          {/*  <Text style = {styles.texts}>Video Başlığı Giriniz</Text>
            <TextInput 
                placeholder = 'Video Başlığı'
                style = {styles.input}
                onChangeText = {(input) => {
                    return(null)
                }}
            /> */}
          </View>
        </ScrollView>
        
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
/*     padding: 16, */
    backgroundColor: 'white',
  },
  text: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 16,
    color: 'black',
  },
  ImageIconStyle: {
    height: 80,
    width: 80,
    resizeMode: 'stretch',
  },
});

export default VideoUpload;