import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <Text>Alfan</Text>
      <NamaBelakang />
      <Foto />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
}

const NamaBelakang = () => {
  return <Text>Mudhofir</Text>
}

const Foto = () => {
  return <Image source={{uri: 'http://placeimg.com/100/100/tech'}} style={{width: 100, height: 100}} />
}

class BoxGreen extends Component{
  render(){
    return <Text>Ini adalah class component</Text>;
  }
}

class Profile extends Component{
  render(){
    return (
      <View>
        <Image source={{uri: "http://placeimg.com/100/100/arch"}} style={{width: 100, height: 100, borderRadius: 50}} />
        <Text style={{color: "blue", fontSize: 24}}>Ini Arsitektur</Text>
      </View>
    );
  }
}


export default SampleComponent;