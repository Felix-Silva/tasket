import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';

export default function NotesScreen() {
  const [notes, setNotes] = useState([
    { id: '1', text: 'Groceries List' },
    { id: '2', text: 'Restaurant Orders' },
    { id: '3', text: 'Movie Watchlist' },
  ]);

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.item}
      onPress={() => {
        console.log('Tapped note:', item.text);
        // soon: navigation.navigate('NoteDetail', { note: item })
      }}
    >
      <Text style={styles.text}>{item.text}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    fontWeight: '600', // semibold
  },
});
