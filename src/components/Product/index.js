import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Madinah from '../../assets/images/img-02.jpg';

const Product = (props) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image source={Madinah} style={styles.imageProduct} />
        <Text style={styles.title} >
          Paket Umroh
        </Text>
        <Text style={styles.price}>Rp 32.000.000,-</Text>
        <Text style={styles.location}>Jakarta Barat</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Beli</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {padding: 12, backgroundColor: "#f2f2f2", width: 212, borderRadius: 8},
  imageProduct: {width: 188, height: 107, borderRadius: 8},
  title: {fontSize: 14, fontWeight: 'bold', marginTop: 12},
  price: {fontSize: 12, fontWeight: 'bold', color: '#F2994A', marginTop: 12},
  location: {fontSize: 12, fontWeight: '300', marginTop: 12},
  button: {backgroundColor: '#6FCF97', paddingVertical: 6, borderRadius: 25, marginTop: 20},
  textButton: {fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center'}
});

export default Product;