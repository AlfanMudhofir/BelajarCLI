import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import Madinah from '../../assets/images/img-02.jpg';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View style= {{
        width: 100, 
        height: 100, 
        backgroundColor: "#0abde3", 
        borderWidth: 2,
        borderColor: "purple",
        marginTop: 20,
        marginLeft: 20
      }} />
      <View style={{padding: 12, backgroundColor: "#f2f2f2", width: 212, borderRadius: 8}}>
        <Image source={Madinah} style={{width: 188, height: 107, borderRadius: 8}} />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 12}} >
          Paket Umroh
        </Text>
        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#F2994A', marginTop: 12}}>Rp 32.000.000,-</Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>Jakarta Barat</Text>
        <View style={{backgroundColor: '#6FCF97', paddingVertical: 6, borderRadius: 25, marginTop: 20}}>
          <Text style={{fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center'}}>Beli</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40,
  }
});

export default StylingComponent;