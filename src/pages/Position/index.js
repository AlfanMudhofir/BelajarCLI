import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import logo from '../../assets/icons/logo1.png';

const Position = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Materi Position</Text>
      <View style={styles.logoWrapper}>
        <Image source={logo} style={styles.iconLogo} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Tempat Anda Berbelanja</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {padding:20, alignItems: 'center'},
  logoWrapper: {borderWidth: 1, borderColor: '#4398D1', width: 93, height: 93,borderRadius: 93/2, justifyContent: 'center', alignItems: 'center', position: 'relative', marginTop: 40},
  iconLogo: {width: 50, height: 50 },
  text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
  notif: {fontSize: 12, color: 'white', backgroundColor: '#6FCF97', padding: 5, borderRadius: 25, width: 24, height: 24, position: 'absolute', top: 0, right: 0}
});

export default Position;
