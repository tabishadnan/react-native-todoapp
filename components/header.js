import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>React Native Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    paddingTop: 20,
    backgroundColor: '#2196F3',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});