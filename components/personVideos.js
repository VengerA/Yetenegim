import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import Video from 'react-native-video';
import Icon from 'react-native-ionicons';
import VideoPlayer from 'react-native-video-controls';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {observer} from 'mobx-react';
import MainStore from './../mobx/store'
import Header from './header';


@observer 
class PersonVideos extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user: MainStore.mainUser
        }
    }

    ratingCompleted = (data) => {
        this.setState({rating: data})
    }
  
    render() {
        const commands = (video) => {
            let output = null
            if (MainStore.mainUser.isPremium){
                output = video.commands.map(command => {
                    return (
                        <View style = {styles.commands}>
                            <View style = {styles.commandContainer}>
                                <Image source = {{uri: MainStore.mainUser.profilfoto}}></Image>
                                <TouchableOpacity>
                                    <Text style = {styles.commandOwner}>{command.name}</Text>
                                </TouchableOpacity>
                                <Text> yorum yapti</Text>
                            </View>
                            <Text style = {styles.commandText}>{command.commandText}</Text> 
                            <Text>{command.commandDate} saat once</Text>
                        </View>
                    )
                })
            }
            return(output)
        }
        const VideoFooter = (video) => {
            let output = null 
            if (MainStore.mainUser.isPremium){
                output = (
                    <View>
                        <View style = {styles.videoFooter2}>
                            <Icon name = "eye" style = {styles.eyeIcon}></Icon>
                            <Text style = {styles.eyeText}>{video.watchNumber}</Text>
                            <Rating
                            type='star'
                            ratingCount={5}
                            imageSize={20}
                            onFinishRating={this.ratingCompleted}
                            style={styles.rating}
                            />
                            <Text style = {styles.ratingText}>8/10</Text>
                        </View>
                        <View style = {styles.videoFooter}>
                            <TouchableOpacity style ={styles.icons}>
                                <Icon name = "heart-empty" style = {styles.icon}></Icon>
                            </TouchableOpacity>
                            <TouchableOpacity style ={styles.icons}>
                                <Icon name = "text" style = {styles.icon}></Icon>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
            return(output)        }
        const arr = MainStore.mainUser.videoList.map(video => {
            return (
                <View>
                    <View>
                        <View style = {styles.userText}>
                            <Image source = {{uri: this.state.image}}
                                style = {styles.logo}
                            ></Image>
                            <TouchableOpacity >
                                <Text style = {styles.sharedUserName}>{video.name}</Text>
                            </TouchableOpacity>
                            <Text style = {{left: '85%'}}>Paylasim Yapti</Text>
                        </View>
                        <Text style = {styles.sharedDate}>{video.sharedDate} gun once paylasim Yapti</Text>
                    </View>
                    <VideoPlayer 
                        source = {{uri: video.videoUrl}}
                        style = {styles.backgroundVideo}
                        disableFullscreen ={true}
                        disableVolume = {true}
                        paused = {true}
                        disableBack = {true}
                    />
                    {VideoFooter(video)}
                    {commands(video)}
                </View>
            )
        })
        return (
            <View>
                <ScrollView>
                    {arr}
                </ScrollView>
            </View>
            
        )   
  }
}

const styles = StyleSheet.create({
    logo: {
        width : 24,
        height: 24
    },
    main:{
        top: 50,
        // bottom:700,
    },
    userText: {
        flexDirection: 'row'
    },
    sharedDate: {
        color: 'grey'
    },
    sharedUserName: {
        color: '#579ACF',
        left: 15
    },
    backgroundVideo: {
        flex: 1,
        width: '100%',
        height: 250,
        marginTop: 20
    },
    videoFooter: {
        flexDirection: "row",
    },
    videoFooter2: {
        flexDirection: "row",
        paddingBottom: 10
    },
    expand: {
        left: 290
    }, 
    yorum : {
        position: 'absolute',
        top: 50
    },
    icons:{
        flex: 4,
    },
    icon: {
        textAlign:'center'
    },
    empty:{
    },
    eyeIcon:{
        flex: 3,
        marginLeft: 30,
        paddingBottom: 20,
        flexDirection: 'row'
    },  
    eyeText: {
        flex: 9,
        top: 7,
        left: 10
    },
    iconBalls:{
        flexDirection: 'row',
        flex: 4,
    },
    rating: {
        flex: 9,
        top: "0.5%"
    },
    ratingText: {
        top: "0.8%",
        flex: 9,
        left: 30
    } ,
    commandContainer: {
        flexDirection: 'row',
        left: 10,
        paddingTop: 10
    },
    commandOwner: {
        color: '#579ACF',
    },
    commandText: {
        left: 10
    },
    commandContent: {
        flex: 1,
        left: 20,
        fontWeight: 'bold',
        paddingVertical: 10
    },
    commands: {
        backgroundColor: '#F9F9F9',
        marginVertical: 5,
    },
    footer: {
        height: 150,
        justifyContent: 'center',
        flexDirection: 'row',
        top: '9%'
    }
    // Main :{
    //     paddingTop: 50,
    //     paddingBottom: 75
    // }

})

export default PersonVideos;

