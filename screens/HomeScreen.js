// screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const data = await AsyncStorage.getItem('notes');
    if (data) setNotes(JSON.parse(data));
  };

  const saveNotes = async (newNotes) => {
    await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
    setNotes(newNotes);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
      />
      <Button
        title="Add Note"
        onPress={() => {
          const newNotes = [...notes, `note ${notes.length + 1}`];
          saveNotes(newNotes);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#474747ff'
    },
  item: {
    fontSize: 18,
    padding: 8,
    borderBottomWidth: 1
},
});
