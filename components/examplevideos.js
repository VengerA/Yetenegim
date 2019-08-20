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

import {observer, action, inject } from 'mobx-react';
import VideoPlayer from 'react-native-video-controls';

class ExampleVideolar extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render() {
    return (
     <ScrollView>
       <View style = {styles.container}>
          <Text style = {styles.header}>Topa Nasıl Müdahele Edilir ?</Text>
          <VideoPlayer 
            source = {{uri: 'https://r3---sn-nv47lnly.googlevideo.com/videoplayback?expire=1564841601&ei=IEJFXaT1NoLPkgbmo5jQAw&ip=216.158.205.120&id=o-ADjk45JJga8PkqQty-tRd0Di3UowUVlVrBxFoSavMaT9&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=31590904&ratebypass=yes&dur=377.393&lmt=1556550714573924&fvip=3&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgLb2vgsRsRpwrBTBacmyCEmPu2GCBBq-ypgfci-fsaNkCIQCDWcB7lkcMtaJJPuw1DoDaSSHnhgmjIXNJg-W-wVFChg%3D%3D&video_id=U9OcS2kPECk&title=5+WAYS+TO+WIN+EVERY+TACKLE+-+HOW+TO+TACKLE+IN+FOOTBALL+-+DEFENDING+HACKS&redirect_counter=1&rm=sn-a5mry7s&req_id=10d865457922a3ee&cms_redirect=yes&ipbypass=yes&mip=24.133.185.227&mm=31&mn=sn-nv47lnly&ms=au&mt=1564829502&mv=m&mvi=2&pl=22&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgEt99aegrppTewmBqRUk_XkUJnWgD11qYTdpAU5r1Y4kCIQCUp38V3QpJDR92gVumLLW6PyJO_zWuq4h0xxIRTZYE3A==' }} 
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>Topa Nasıl Müdahele Edilir?  V.2 </Text>
          <VideoPlayer 
            source = {{uri: 'https://r4---sn-5uaezn6k.googlevideo.com/videoplayback?expire=1564851262&ei=3WdFXfmAPJKNkAP7wJuQDg&ip=66.78.59.102&id=o-AGL6nlMCMNvfHFuJadxfmsNIdpdjUZZa9mJBWKjwCBCF&itag=18&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-5uaezn6k%2Csn-5ualdne7&ms=au%2Crdu&mv=u&mvi=3&pl=24&mime=video%2Fmp4&gir=yes&clen=15879201&ratebypass=yes&dur=224.188&lmt=1480246139252249&mt=1564828912&fvip=4&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgdZw6HBjpedy2ckDDMkfN7u1cgV32WuoJfz5cG59WJAgCICtZH9Cmo_zCTf-d3r3pAxM_ugrYEzaOYQmmt0bfwWP_&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AHylml4wRAIgGDxvEu7rnyISUKyrE51_xvpIsM6PFehZoKJlMeSkEkYCIAh3xre8YqSie7_aXrQlJ3yeKcTv4JMVCu47_QeB8-Sr&video_id=wsftt3dmbnE&title=How+to+tackle+in+soccer+-+How+do+a+tackle+in+football+-+How+to+defend+in+football+soccer' }} 
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>Top Sürme Antrenmanı Drilleri</Text>
          <VideoPlayer 
            source = {{uri: 'https://r1---sn-nv47lney.googlevideo.com/videoplayback?expire=1564851293&ei=_WdFXc_XMYOi1Abi8pI4&ip=117.74.113.45&id=o-ADaTFLT-D0QA70ZIit-3SCGpIla4zeN31zpj-eAvM_tJ&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=33775022&ratebypass=yes&dur=364.158&lmt=1540164589588924&fvip=1&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhALUjMX9rKjIVk-KmW0QG3-sORkyK3VRdGdBi8BAiI1AvAiEAvFkRTgGM0nwtfSZsAH1sZ7fS8oBQCIDkEltEla-GAYc%3D&video_id=jwIHc9rz7yo&title=5+Essential+Dribbling+Drills+Every+Player+Should+Master&rm=sn-jx25uoxu-jb3l7e,sn-npoll7e&req_id=44f92fa98bf7a3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mip=24.133.185.227&mm=29&mn=sn-nv47lney&ms=rdu&mt=1564829626&mv=m&mvi=0&pl=22&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIhAMvZ3ws0PcI0k3vr1_z63W-x-hD-jf1mjG4wi4laIPHVAiBJ50WZC-KyHr7bX5OHP1sTedrzoYimTP-T37mmeclQFA==' }} 
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>Top Sürme Antrenmanı Drilleri V.2</Text>
          <VideoPlayer 
            source = {{uri: 'https://r3---sn-nv47lnsk.googlevideo.com/videoplayback?expire=1564849441&ei=wWBFXY7DF4OZyQWU2I74Cw&ip=5.58.131.2&id=o-AM80i5pqf4tDUu-DrDiny6SJkoTmKyYW5BrBKiI8cnLT&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=18788698&ratebypass=yes&dur=297.656&lmt=1540899285869129&fvip=3&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhALbPOD9j979uQEl7Khng9hriUdrdhJsD2OjPoqggUa_MAiEA3INUJ7KxKwYSoYaezzGMRL7uqXQeiLHMCyGSQLyUwys%3D&video_id=L8nLeD9WdVk&title=How+to+Improve+Your+Dribbling+Skills+-+Training&rm=sn-a5oxu-uoae7s,sn-3c2er7s&req_id=fc6c952714a2a3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mip=24.133.185.227&mm=29&mn=sn-nv47lnsk&ms=rdu&mt=1564829685&mv=m&mvi=2&pl=22&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRgIhAPCiGluT8Joo31FnOK4NFi3Q4wdG7qOzQq6rw9lV_poYAiEA3vfYlNxdN5b6Bo8gNh4lNUQreBmInMT_Q-dkalkUzmE=' }} 
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
       
        <View style = {styles.container}>
          <Text style = {styles.header}>Şut Çekme Antrenmanı</Text>
          <VideoPlayer 
            source = {{uri: 'https://r4---sn-h557snsl.googlevideo.com/videoplayback?expire=1564851417&ei=eWhFXcp7xdOgA8SpleAF&ip=119.161.98.131&id=o-AHvbVWr_RzRCGcyIFlr-Mj-7aOmgZiWMKCfOWTdgPg0L&itag=18&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-h557snsl%2Csn-h5576n7r&ms=au%2Crdu&mv=m&mvi=3&pl=24&initcwndbps=682500&mime=video%2Fmp4&gir=yes&clen=21684814&ratebypass=yes&dur=261.619&lmt=1542194638548763&mt=1564829746&fvip=4&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgHCsJKPK2i_EvzR6xW3o6l_E0WJ1dfgV14k5-C1eZ4p0CICOvF87A-TP0pJkFo-R7IIC41uJ-t8mIi8psYEksf_Fi&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRQIhAIeevu64UkuGQTIAor7OWdvlETzuJNEvt3l_NuC0UuZlAiA9ZvvNEyssY54LmWLkFdDBh5v13M-LQjuojDDPhMdGMQ%3D%3D&video_id=KyBk7prElm0&title=Pre-season+training+for+football+-+Shooting+drills' }} 
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>Şut Nasıl Çekilir ?</Text>
          <VideoPlayer 
            source = {{uri: 'https://r2---sn-n4v7sn7y.googlevideo.com/videoplayback?expire=1564851031&ei=9mZFXfLcOfG9z7sP1LuzyAE&ip=45.77.168.53&id=o-AM0q-XSsFWzwoggHKf3zMXG_IppOz5KXb0CJQCXSUiHw&itag=18&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-n4v7sn7y%2Csn-q4fl6nlz&ms=au%2Crdu&mv=m&mvi=1&pl=27&initcwndbps=451250&mime=video%2Fmp4&gir=yes&clen=44152499&ratebypass=yes&dur=674.028&lmt=1539993736864188&mt=1564829339&fvip=2&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAMOcC1PWTd5w0Bu1ViwPFglZKPTjbjWYYks1wuc1t6l2AiBCxGgNSzDiObz4cCqwwi_xZgzOdlK6LHsbiuqlXs0Reg%3D%3D&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRQIgRhp8YFUZyMn6ee8KP0ZVFKC8O82w1DsuWrndkvy0FqUCIQCrOoTH0wk6R9hrQuH7Rg31P2ruXNgBrMrIDO2vdMl-VQ%3D%3D&video_id=wIQaz2GMkTs&title=10+Easy+Ball+Control+Exercises+-+Improve+Your+Ball+Control+With+These+Exercises'}}
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>Top Kontrolünü Geliştirme Antrenmanları</Text>
          <VideoPlayer 
            source = {{uri: 'https://r5---sn-n4v7knl6.googlevideo.com/videoplayback?expire=1564850960&ei=sGZFXcWOH5nJkgbrrZPQDA&ip=108.186.244.17&id=o-AJUAEzPXadMkegp92MkxCf8GJpFMNsq2fUWr4HFSD9jF&itag=18&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-n4v7knl6%2Csn-a5meknek&ms=au%2Conr&mv=m&mvi=4&pl=16&initcwndbps=5981250&mime=video%2Fmp4&gir=yes&clen=16250310&ratebypass=yes&dur=181.487&lmt=1428122622880936&mt=1564829203&fvip=6&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhALTfzzQmOsjL6FwMh5XBHjfpjsCts6hdUeL55hQwTBUeAiEAkMRGNSw7wSlnNvTUR96bdVaF54oy8k501oqSb2jLc6Y%3D&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRQIgYg5dzm9qvfN7_CId_c9ytt8FlYiAC33yV-UBjvyttSYCIQC4Y8LbuvV9mi2DSPrxomxzdiUnHRP28YqE2Ph5RY1JDA%3D%3D&video_id=-pPWe8Rjl9U&title=How+to+Improve+Your+Ball+Control%2C+Dribblings+%26+Soccer+Tricks+by+freekickerz'}}
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
          <Text>Burası Da İkinci Video</Text>
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>op Kontrolünü Geliştirme Antrenmanları V.2</Text>
          <VideoPlayer 
            source = {{uri: 'https://r5---sn-hpa7znse.googlevideo.com/videoplayback?expire=1564850928&ei=kGZFXeydJYLJVKeNuvgM&ip=212.237.30.203&id=o-AIXBdAf0fHKsAICn_EmHIczAZMCk065ryxH1qFuO1rwh&itag=18&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-hpa7znse%2Csn-hgn7yn7l&ms=au%2Conr&mv=m&mvi=4&pl=24&initcwndbps=308750&mime=video%2Fmp4&gir=yes&clen=20959883&ratebypass=yes&dur=270.419&lmt=1540690323750175&mt=1564829203&fvip=5&beids=9466585&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgC-Pnh4-AByq3Poj8DSmuUbDJVuCWRtvyBA42m6d6ddMCIBj7IauXYrkfKhjq4kByVbQSrbZWBQgSsODXc9h-5mbx&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRAIgGNsMCKqCLWajUXlsA4pLb0Zsyx8hHxc8YKJpRkali3cCIFYGTIBM3lpyhDiOP9kY7PBpndCBoMpkmD_Vi9WEE6yf&video_id=Sm-u_ESEmjE&title=How+to+Improve+Your+Passing+Accuracy+in+Football+-+Tips'}}
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>İsabetli Pas Nasıl Atılır? </Text>
          <VideoPlayer
          source = {{uri : 'https://r5---sn-q4fl6nl7.googlevideo.com/videoplayback?expire=1564850884&ei=ZGZFXennKcyW1waqtL4I&ip=154.43.2.71&id=o-AHO8CmFLzfF339rCkb5HUWupQXYDTnOcNcWfCGdKF43h&itag=18&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-q4fl6nl7%2Csn-vgqskn7z&ms=au%2Conr&mv=u&mvi=4&pl=24&mime=video%2Fmp4&gir=yes&clen=22884424&ratebypass=yes&dur=292.896&lmt=1542375304818640&mt=1564828912&fvip=5&c=WEB&txp=5431432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAMOILw1PS6_RQxGLUM0deFDdSW1rq-9KZ_L80G7r4lHAAiAxPKNjoCTX_LKpxOXTQ2WtWlmXndUNlZZ_IjUhkwDPYA%3D%3D&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AHylml4wRQIgPSppV5dCn6PdudiO59rOYxaw6RDCYbQQQQ02aveLpDYCIQD64jlzkHytiZeQasN0QvLxoewKoosS26qx2R9-iBHhWQ%3D%3D&video_id=-UApnG9PwKA&title=HOW+TO+IMPROVE+YOUR+FIRST+TOUCH+–+IMPROVE+BALL+CONTROL+IN+SOCCER+-+Day+8'}} 
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>Top Kontrolü Ve İlk Dokunuş Antrenmanları</Text>
          <VideoPlayer 
            source = {{uri: 'https://r2---sn-npoe7nek.googlevideo.com/videoplayback?expire=1564850811&ei=GmZFXeGnKNaE1AaUr5CQAw&ip=110.136.205.218&id=o-ACZmieMkIkBdBNzPv4wk0a9VwKS8-A9n1OO5h39Uv_-F&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=20433607&ratebypass=yes&dur=236.472&lmt=1495331136134495&fvip=2&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhAJIFHWffoNnoTfdqwZPSA4oRdkv3O-Bu8IVjN2OjCKi-AiEA08V7EiEUf9_OmjEFePsH0ixrNS-o8nn-uCVI1OJIsms%3D&video_id=0Rh9JRlQq_o&title=Troy+Deeney+-+Essential+shooting+drill+-+Train+Like+a+Pro&redirect_counter=1&rm=sn-2uuxa3vh-c2oe7l&req_id=17b8f6cef5ffa3ee&cms_redirect=yes&ipbypass=yes&mm=29&mn=sn-npoe7nek&ms=rdu&mt=1564829143&mv=m&mvi=1&pl=22&lsparams=ipbypass,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIhALf3xtEG-O7wUijp8oKbYv8mKySD8vCJHgjpC0PYGrQ-AiA8u7k32OrHiC_HONYwpsHxwVFxmsgXjNxJnbcLUaeV8A=='}}
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>Şut Çekme Antrenmanları</Text>
          <VideoPlayer 
            source = {{uri: 'https://r3---sn-nv47lnsr.googlevideo.com/videoplayback?expire=1564850044&ei=HGNFXYY7oZCQBPiBvOgI&ip=23.82.80.176&id=o-ADpJe7-Pev4Y1R0SFAOw07I4cC-reWX4Xz75csBSsX76&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=20713340&ratebypass=yes&dur=273.809&lmt=1481965666829975&fvip=3&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAMJ9FylPtL0xrUJXCkPi_1-KKWvJydR0HDUibkluLb3_AiADdp6aedwbxgYHfJltdEphVhF09hOL1i51sWh-Qn3SSw%3D%3D&video_id=W-ztfJCv3ow&title=RECOVERY+AND+SHOOTING+-+Man+City+Training&redirect_counter=1&rm=sn-vgqeel7z&req_id=3acf43d36b3da3ee&cms_redirect=yes&ipbypass=yes&mip=24.133.185.227&mm=31&mn=sn-nv47lnsr&ms=au&mt=1564828366&mv=m&mvi=2&pl=22&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRgIhAJDJqc32-yd13WGKBgyelFhO2gW6J13EZfGxwPVoBn2rAiEA1dG-6jLGIoUcoaQvPA8zK12-PgV56w1yw2pFxNFruqI='}}
             style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>Şut Çekme Antrenmanları</Text>
          <VideoPlayer 
            source = {{uri: 'https://r5---sn-5ualdnel.googlevideo.com/videoplayback?expire=1564834916&ei=BChFXbbUJseq4QTtybTABg&ip=168.91.71.66&id=o-AM1Km2tBedxnEi5N9TPZnoKkeBA_2XeEJDGd1qkuX_ua&itag=18&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-5ualdnel%2Csn-5uaeznrz&ms=au%2Crdu&mv=u&mvi=4&pl=22&mime=video%2Fmp4&gir=yes&clen=23973584&ratebypass=yes&dur=401.217&lmt=1550146328243600&mt=1564813083&fvip=5&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAJu2SaiWJyfFtE9jaanF6KuJiNpcgdJuLMqqmnBvgJXfAiAbYBJ7BBuGbkdftN9uHqpSH1qohysny1ngL-SffsyR8w%3D%3D&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AHylml4wRQIgONJyvwN1rZG_X7s_pim4WraLfPOSJ5Mi153KiHlThbECIQDRhRvaQzgWumbpoygTZqp_iimj1hgyM8C9pEJ2F5Einw%3D%3D&video_id=PMoaKZNOS3U&title=LEARN+THE+%27PING%27+-+Long+pass+football+skills+tutorial'}}
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>Uzun Pas Antrenmanı</Text>
          <VideoPlayer 
            source = {{uri: 'https://r1---sn-uh-30alr.googlevideo.com/videoplayback?expire=1564849781&ei=FWJFXYqxGZyJz7sPpo-rqA0&ip=1.9.63.66&id=o-AGNrFTQ75A1egV2BZEhtHo7I5yXOMx12At3jsTWehEYH&itag=18&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-uh-30alr%2Csn-30a7yne7&ms=au%2Crdu&mv=m&mvi=0&pl=18&initcwndbps=733750&mime=video%2Fmp4&gir=yes&clen=25585482&ratebypass=yes&dur=355.404&lmt=1532537865946287&mt=1564828118&fvip=1&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRgIhAMSA4Y4PFMsgKP31qC_AGIxI58WpPov79woaq8AArdeeAiEAsa6rAESpnxjepy6I6zNjv-tdAOr-7zKUXqL3JrmKqpQ%3D&sig=ALgxI2wwRQIgDLon39nXxiyQ2CbGfr3hu5ElhLLy1uyLAHlLNzcHJVoCIQC4fxia902jpxo-E1qQzGNr4f6whoEsFIA91sBoea2G4w%3D%3D&video_id=P-WeVjGcRss&title=How+to+Ping+-+Amazing+Football+Tutorial+-+F2Freestylers'}}
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>Kaleci Antrenmanları</Text>
          <VideoPlayer 
            source = {{uri: 'https://r1---sn-nv47lnl7.googlevideo.com/videoplayback?expire=1564849715&ei=02FFXY-KKI-7oAPe8ZGYAQ&ip=103.250.157.38&id=o-AOFZL423yrn2XC48o8xx3JzJJrQA3Y7FtlvASsmCV_QM&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=78428364&ratebypass=yes&dur=1035.215&lmt=1554226838413232&fvip=1&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgcn3kMmUqGLbqZ3lUg4eK_YWPeFhfU_wz_bh7YGmDjq4CIQCmvLn7erKmJU1f_HXD_dal-avNIoQUAx8HHAOhgynOBg%3D%3D&video_id=qBhHAa95uD8&title=Recovery+Movements+%26+Angle+Shot+Stopping+-+Goalkeeper+Training+-+Pro+Gk+Sessions&rm=sn-bu2a-cq9e7e,sn-cvhly7e&req_id=c7b77ffcdc62a3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mip=24.133.185.227&mm=29&mn=sn-nv47lnl7&ms=rdu&mt=1564828062&mv=m&mvi=0&pl=22&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRgIhAKdBM9Rbj61JzvZa9SVjeTtNJEdtDWbWRrWq4Tr7JAUqAiEA52fRzKRJ4Q359xbEte5oWF_Rrq_L27w8AEmW7YwV0hw='}} 
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>Kaleci Antrenmanları V.2</Text>
          <VideoPlayer 
            source = {{uri: 'https://r6---sn-hp57knss.googlevideo.com/videoplayback?expire=1564849657&ei=mWFFXcSIGNGSkAT9yInwBg&ip=190.61.5.10&id=o-AOm20nfCrBHLYezWLRiEQPcLlajn9zUYB5qRtbI96wht&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=11980451&ratebypass=yes&dur=251.820&lmt=1563556393546889&fvip=6&c=WEB&txp=2211222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgX0GXO-Ypnw0crwaTmLGyIAPP25QWzJAvTxCltnJnV-QCIQDKW7-17sOEyV72Wd0YvZUkfdHmX7vjjgz6ZaqeaQoSzg%3D%3D&video_id=b2NHj-T8LEk&title=GOALKEEPER+TRAINING+-+AWARENESS+AND+MOVEMENT&redirect_counter=1&rm=sn-buu-hp5s76&req_id=dc8c2994b41ca3ee&cms_redirect=yes&ipbypass=yes&mm=29&mn=sn-hp57knss&ms=rdu&mt=1564827339&mv=u&mvi=5&pl=24&lsparams=ipbypass,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRAIgIVUkpvynuR9iQQugEtChOLLrdUAen59SVZcBNpEBAeECIF_lLZBM2xLR9Pp-cgXyQ81xN-wo88_jtfBumBS-Lyyl'}}
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>Kaleci Antrenmanları V.2</Text>
          <VideoPlayer 
            source = {{uri: 'https://r4---sn-vgqsrnll.googlevideo.com/videoplayback?expire=1564849568&ei=QGFFXcHtFs3s8wSx8ITwCA&ip=204.14.87.172&id=o-AD-5Ld-3xzHHRikfChRZAZ5IvoNCQAac1yyw-fe_X-wS&itag=18&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-vgqsrnll%2Csn-vgqsknez&ms=au%2Crdu&mv=m&mvi=3&pl=23&mime=video%2Fmp4&gir=yes&clen=28018105&ratebypass=yes&dur=420.931&lmt=1552254529807559&mt=1564827885&fvip=4&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIgaPlZ9VB6Ym6DtwCLjEPthWfQWR57zZtEI8iu7qVIdzECIFNCSichif6caZMkdC8hqDHZFDOI2M8ERJohqwDxMiUD&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AHylml4wRQIhAPdgVRgeFzCiYD7L8wjO1ST6VFXQMKnI5ZkHRkx1CYkgAiAbzGv-AjY7bXQU-TrsoBuufOQwBppvMAQ2pd2d52X5Jw%3D%3D&video_id=ysQbqpdo8Os&title=TOP+5+DEFENDING+SECRETS+-+BECOME+THE+BEST+DEFENDER+IN+FOOTBALL'}}
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>Defans Antrenmanları</Text>
          <VideoPlayer 
            source = {{uri: 'https://r1---sn-nv47ln7s.googlevideo.com/videoplayback?expire=1564847189&ei=9VdFXfT1Dv-Ls8IPkKiGMA&ip=103.35.64.12&id=o-AKYLWM87usjmPqrBa30f53I0c7SkhfLTFjzDbQmBxfc7&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=32913478&ratebypass=yes&dur=395.668&lmt=1527768837008745&fvip=2&c=WEB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhAP_AZUv8QWux_AzrTBTPyEV41gYQL67WVNKMqS18VpQ6AiEAkBhzILb4BcWMZDX-_axCVNdOEg2dOs3gwJgOSbvJVT8%3D&video_id=kjoJOLXonEo&title=Defending+Drills+-+Pro+session+-+Soccer+-+Right+back+-+2+-+Joner+1on1&rm=sn-42u-i2is7e,sn-42u-i5oz7l,sn-i3b6y7e&req_id=8a64e183c7afa3ee&redirect_counter=3&cms_redirect=yes&ipbypass=yes&mip=24.133.185.227&mm=30&mn=sn-nv47ln7s&ms=nxu&mt=1564827172&mv=u&mvi=0&pl=22&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIhALzb56h_c1Lz7Vx3aOObdK9IffTgLMSiLKWqX2jE4v8HAiAS_x6SFjW4oiLnLD65pZBTDaVkIfLKyVLz3MFsEI_1ew=='}}
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.header}>Defans Antrenmanları V.2</Text>
          <VideoPlayer 
            source = {{uri: 'https://r1---sn-4g5e6nzz.googlevideo.com/videoplayback?expire=1564847105&ei=oVdFXZPMMq6u3LUP8Mmg4Ac&ip=103.68.52.54&id=o-AC24ZWuvZ_NXxeB8GzFn2qm1y22OEbpup3HjltSbGoMz&itag=18&source=youtube&requiressl=yes&mime=video%2Fmp4&gir=yes&clen=14885211&ratebypass=yes&dur=307.339&lmt=1550328672195398&fvip=1&c=WEB&txp=2211222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgIWbd5xggVSzl7O8wUAbj_ZCA_jBSr36efB0waB7xHbQCIQCf-xHwUvlr93YKyXZILDab6cR6O0-IDE6d5hdZGCIlcw%3D%3D&video_id=YFViDVuDsgE&title=Marcelo+-+How+to+be+a+successful+fullback&rm=sn-cvhse7e&req_id=26b63597e84ba3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-nv4z77e&cms_redirect=yes&mip=24.133.185.227&mm=34&mn=sn-4g5e6nzz&ms=ltu&mt=1564825404&mv=m&mvi=0&pl=22&lsparams=ipbypass,mip,mm,mn,ms,mv,mvi,pl&lsig=AHylml4wRQIgSEEsHbKTulVgsflN8NqTx1gfNnCnBt4Kx5aIWUia-JECIQC4Ua-MYn3Z38HBSvNBzUIUgaWzzGyPS6bk-G8MbkZEYA=='}}
            style = {styles.backgroundVideo}
            disableFullscreen ={true}
            disableVolume = {true}
            paused = {true}
            disableBack = {true}
          />
        </View>
        
     </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    marginVertical : 20,
  },
  backgroundVideo: {
    flex: 1,
    width: '100%',
    height: 250,
    marginTop: 20,
  },
  header: {
    fontWeight: "bold",
    fontSize : 24,
    borderBottomWidth: 1,
    borderBottomColor: '#579ACF',
    padding: 20,
    color: '#579ACF'
  }
})

export default ExampleVideolar;

