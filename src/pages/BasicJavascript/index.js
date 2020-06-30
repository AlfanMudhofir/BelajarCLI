import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BasicJavascript = () => {
  //Variable primitif
  const nama = 'Alfan Mudhofir';
  let usia = 28;
  const apakahLakiLakki = true;

  // Variable complex
  const hewanPeliharaan = {
    nama: 'Meng',
    jenis: 'Kucing',
    usia: 2,
    hewanLokal: true,
    warna: 'Kuning',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Ratu'
    }
  }//objet

  const sapaOrang = (name, age) => {
    return console.log(`Hai! ${name} (dengan usia ${age})`);
  }//function

  sapaOrang('Alfan', 28);

  const namaOrang = ['Alfan', 'Rama', 'Rijal']//object - array

  const sapaHewan = (objectHewan) => {
    // let hasilSapa = ''
    // //Kondisi seleksi
    // if(objectHewan.nama === 'Meng'){
    //   hasilSapa = 'Puss Meong!';
    // } else {
    //   hasilSapa = 'Kucing Siapa?';
    // }
    // return hasilSapa;

    return objectHewan.nama === 'Meng' ? 'Puss Meong!' : 'Kucing Siapa?';
  }


  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Basic JavaScript di React Native</Text>
      <Text> Nama: {nama}</Text>
      <Text> Usia: {usia}</Text>

      <Text>{sapaHewan(hewanPeliharaan)}</Text>
    {/*Looping*/}
      {namaOrang.map((index) => (
        <Text>{index}</Text>
      ))}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'}
});

export default BasicJavascript;