import * as React from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import{ Audio}from "expo-av"

class SoundButton extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
      {uri:'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      {shouldPlay:true}
     ) 
  }

  render() {
    return (

    <TouchableOpacity style ={{backgroundColor:"green",
    marginLeft:100,borderWidth:1,borderColor:"blue",
    alignItems:'center',width:200,height:200,borderRadius:100,justifyContent:'center'}}
    onPress={this.playSound}>

    <Text style={{fontWeight:'bold',fontSize:25}}>Press</Text>
  </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}
const styles= StyleSheet.create({

})