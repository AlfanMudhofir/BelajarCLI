import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image source={{uri: props.gambar}} style={{width: 70, height: 70, borderRadius: 70 / 2}} />
      <Text style={{maxWidth: 70, textAlign: 'center'}}>{props.nama}</Text>
    </View>
    )
}

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Componen Dinammis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story nama="Technology" gambar="http://placeimg.com/100/100/tech" />
          <Story nama="Architecture" gambar="http://placeimg.com/100/100/arch" />
          <Story nama="Animals" gambar="http://placeimg.com/100/100/animals" />
          <Story nama="Nature" gambar="http://placeimg.com/100/100/nature" />
          <Story nama="People" gambar="http://placeimg.com/100/100/people" />
          <Story nama="Grayscale" gambar="http://placeimg.com/100/100/animals/grayscale" />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default PropsDinamis;
