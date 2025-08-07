import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NotesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>Sample notes. This is a sample note.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#2c2c2c',
    padding: 20,
  },
  item: {
    backgroundColor: '#3c3c3c',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
  },
  text: {
    color: '#fff9c4',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
