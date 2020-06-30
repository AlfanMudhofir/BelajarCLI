import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

const Communication = () => {
  const [total, setTotal] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Komunikasi antar Component</Text>
      <Cart qty={total} />
      <Product onButtonPress={() => setTotal(total + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding:20},
  textTitle: {textAlign: 'center'},
});

export default Communication;