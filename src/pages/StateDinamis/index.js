import React, { useState, Component } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

const Counting = () => {
  const [angka, setAngka] = useState(0);
  return(
    <View>
      <Text>{angka}</Text>
      <Button title='Tambah' onPress={() => setAngka(angka + 1)} />
    </View>
  )
}

class CountingClass extends Component {
  state = {
    angka: 0
  }
  render(){
    return(
      <View>
        <Text>{this.state.angka}</Text>
        <Button title='Tambah' onPress={() => this.setState({angka: this.state.angka + 1})} />
      </View>
    )
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Materi Componen Dinammis dengan State</Text>
      <Text style={styles.titleSection}>Function Component (Hooks)</Text>
      <Counting />
      <Counting />
      <Text style={styles.titleSection}>Class Component</Text>
      <CountingClass />
      <CountingClass />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {padding: 20},
  textTitle: {textAlign: 'center'},
  titleSection: {marginTop:20,}
});

export default StateDinamis;