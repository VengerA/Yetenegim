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
  Alert
} from 'react-native';

import Video from 'react-native-video';
import Icon from 'react-native-ionicons';
import VideoPlayer from 'react-native-video-controls';
import { Rating, AirbnbRating } from 'react-native-ratings';
import {observer} from 'mobx-react';
import MainStore from './../mobx/store'
import Header from './header';
import axios from 'axios';

@observer 
class mainPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            video: 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
            comment: false,
            comments: {}
        }
    }

    comment = () => {
        if(this.state.comment){
            this.setState({comment: false})
        }
        else {
            this.setState({comment: true})
        }
    }
    
    takeUser = (video) => {
        axios.get('http://ieeemetu.pythonanywhere.com/api/accounts/users/' + video.owner_id.toString() + '/', {
            headers: {
                Authorization: 'Token ' + MainStore.mainUserToken 
              }
            })
        .then(response => {
            MainStore.clickedUser = response.data
            /* this.props.navigation.navigate('ClickedUser') */
        })
        .catch(error => Alert.alert("Şu Anda Bu Kullanıcıya Erişilemiyor"))
    }

    takeUser2 = (comment) => {
        axios.get('http://ieeemetu.pythonanywhere.com/api/accounts/users/' + comment.user.id.toString() + '/', {
            headers: {
                Authorization: 'Token ' + MainStore.mainUserToken 
              }
            })
        .then(response => {
            MainStore.clickedUser = response.data
            this.props.navigation.navigate('ClickedUser')
        })
        .catch(error => Alert.alert("Şu Anda Bu Kullanıcıya Erişilemiyor"))
    }

    takeVideos = () => {
        axios.get('http://ieeemetu.pythonanywhere.com/api/media/last-activities/', {
          headers: {
            Authorization: 'Token ' + MainStore.mainUserToken 
          }
        })
        .then(response => {
          MainStore.videoList = response.data
        })
    }
    componentWillMount(){
    this.takeVideos()
    }

    takeComments = (id) => {
    axios.get('http://ieeemetu.pythonanywhere.com//api/media/comments/video/?id='  + id.toString() , {
        headers: {
            Authorization: 'Token ' + MainStore.mainUserToken 
        }
        })
        .then(response => {
        this.setState({comments: response.data})
        })
    }
     
    postComment = (videoİd) => {
        let newComment = {
            comment: this.state.comment,
            video_id: videoİd,
            owner_id: MainStore.mainUser.id.toString()
        }

        axios.post('http://ieeemetu.pythonanywhere.com/api/media/comments/video/new/', newComment, {
            headers:{
                Authorization: 'Token ' + MainStore.mainUserToken 
            }
        } )
            .then(response => Alert.alert("Yorumunuz Yeteneğimi yeniden açtığınızda gözükecektir"))
    }

    addLike = (video) =>{
        let addLike = {
            owner_id: MainStore.mainUser.id,
            video_id: video.id
        }
        axios.post('http://ieeemetu.pythonanywhere.com/api/media/like-video/', addLike, {
            headers: {
                Authorization: 'Token ' + MainStore.mainUserToken 
            }
            })
            .then(resp => {
            })
            .catch(err => Alert.alert("Bu Postu Zaten Beğendiniz"))
    }

    addWatch = (video) => {
        let addWatch = {
            owner_id: MainStore.mainUser.id,
            video_id: video.id
        }
        axios.post('http://ieeemetu.pythonanywhere.com/api/media/watch-video/', addWatch, {
            headers: {
                Authorization: 'Token ' + MainStore.mainUserToken 
            }
            })
    }

    rateVideo = (video, rate) => {
        let rating = {
            user_id : MainStore.mainUser.id,
            video_id: video.id,
            rate: rate
        }
        Alert.alert(JSON.stringify(rating))
        axios.post('http://ieeemetu.pythonanywhere.com/api/media/rate', rating, {
            headers: {
                Authorization: 'Token ' + MainStore.mainUserToken 
            }
            })
            .then(Alert.alert('Rating Basarli'))
    }

    render() {
        const comment = (video) => {
            let output = null 
            if (this.state.comment){
                output = (
                    <View>
                        {commands(video.comments)} 
                        <View style = {{flexDirection: 'row', height: 50 }}>
                            <TextInput
                            placeholder = "Yorum Yap"
                            style = {{width :'75%', height: '80%'}}
                            onChangeText = {(input) => {
                                this.setState({comment : input})
                            }}
                            />
                            <Button
                                style = {{width: '25%', top: 30}}
                                title = "Gonder"
                                onPress = {() =>{
                                    this.postComment(video.id)
                                }}
                            />
                        </View>
                    </View>
                    
                )
            }
            return (output)
        }
        const commands = (comments) => {
            let output = comments.map(comment => {
                return ((
                    <View style = {styles.commands}>
                        <View style = {styles.commandContainer}>
                            <TouchableOpacity 
                                onPress = {() => {
                                    this.takeUser2(comment)
                                    /* this.props.navigation.navigate("ClickedUser") */
                                }}
                            >
                                <Text style = {styles.commandOwner}>{comment.user.username}</Text>
                            </TouchableOpacity>
                            <Text> Yorum Yaptı</Text>
                        </View>
                        <Text style = {styles.commandText}>{comment.comment}</Text> 
                        <Text>{Date(comment.date_created)}</Text>
                    </View>
                ))
            })
            return (output)
            /* let output = null
3           output = () => {comments.map(command => {
                Alert.alert(JSON.stringify(command))
                return (
                    
                )
            })
            }
            return(output)
        } */
        }
        const VideoFooter = (video) => {
            let output = null 
            if (MainStore.isPremium){
                output = (
                    <View>
                        <View style = {styles.videoFooter2}>
                            <Icon name = "eye" style = {styles.eyeIcon}></Icon>
                            <Text style = {styles.eyeText}>{video.watch_count}</Text>
                            <Rating
                            type='star'
                            ratingCount={5}
                            imageSize={20}
                            onFinishRating={(rate) => this.rateVideo(video, rate)}
                            style={styles.rating}
                            />
                            <Text style = {styles.ratingText}>{video.rate}</Text>
                        </View>
                        <View style = {styles.videoFooter}>
                            <TouchableOpacity style ={styles.icons}
                                onPress = {() => this.addLike(video)}
                            >
                                <Icon name = "heart-empty" style = {styles.icon}></Icon>
                                <Text style = {styles.likes}>{video.likes}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style ={styles.icons}
                                onPress = {() => {
                                    this.comment()
                                }}
                            >
                                <Icon name = "text" style = {styles.icon}></Icon>
                            </TouchableOpacity>
                        </View>
                        {/* {commands(video)} */}
                    </View>
                )
            }
            return(output)        
        }
        const arr = MainStore.videoList.map(video => {
            return (
                <View style = {styles.container}>
                    <View>
                        <View style = {styles.userText}>
                            <Image source = {require('../static/yetenegimLogo.jpeg')}
                                style = {styles.logo}
                            ></Image>
                            <TouchableOpacity 
                                onPress = {() => {
                                    this.takeUser(video)
                                }}
                            >
                                <Text style = {styles.sharedUserName}>{video.owner_uname}</Text>
                            </TouchableOpacity>
                            <Text style = {{left: '85%'}}>Paylaşım Yaptı</Text>
                        </View>
                        <Text style = {styles.sharedDate}>{Date(video.date_created)}</Text>
                    </View>
                    <VideoPlayer 
                        source = {{uri: 'http://ieeemetu.pythonanywhere.com' + video.url}}
                        style = {styles.backgroundVideo}
                        disableFullscreen ={true}
                        disableVolume = {true}
                        paused = {true}
                        disableBack = {true}
                        onStart = {this.addWatch(video)}
                    />
                    {VideoFooter(video)}
                    {comment(video)}
                </View>
            )
        })
        return (
            <View>
                <Header />
                <ScrollView>
                    {arr}
                    <View >
                    <TouchableOpacity style = {styles.footer}>
                        <Icon name = "refresh"></Icon>
                        <Text style = {{left: 10, top: 5}}>Daha Fazla</Text>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            
        )   
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    logo: {
        width : 30,
        height: 30,
        borderRadius: 15,
        top: -3

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
        paddingBottom: 10,
        top:10
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
        flexDirection: 'row',
        justifyContent: 'center'
    },
    likes: {
        fontSize: 20,
        marginLeft: 10,
        top: "1%"
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
        height : 80
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

export default mainPage;

