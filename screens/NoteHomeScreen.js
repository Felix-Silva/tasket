import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { Button } from 'react-native-paper';

export default function NoteHomeScreen({ navigation }) {
  const [notes, setNotes] = useState([]);

  // navigate to NoteScreen for a new note
  const addNote = () => {
    const newId = Date.now().toString();

    navigation.navigate('NoteScreen', {
      note: { id: newId, title: '', text: '' }, // empty text for new note
      updateNote: (title, text) => {
        setNotes((prev) => {
          // if note already exists, update it
          const exists = prev.find((n) => n.id === newId);
          if (exists) {
            return prev.map((n) =>
              n.id === newId ? { ...n, title, text } : n
            );
          }
          // otherwise add a new note
          return [...prev, { id: newId, title, text }];
        });
      },
    });
  };

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.item}
      onPress={() =>
        navigation.navigate('NoteScreen', {
          note: item,
          updateNote: (title, text) => {
            setNotes((prev) =>
              prev.map((n) =>
                n.id === item.id ? { ...n, title, text } : n
              )
            );
          },
        })
      }
    >
      <Text style={styles.text}>{item.title || '(Untitled)'}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No notes yet. Add one!</Text>
        }
      />
      <Button mode="contained" onPress={addNote} style={styles.addButton} labelStyle={{color: '#2c2c2c', fontWeight:'bold'}}>
        Add Note
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2c',
    padding: 20,
  },
  addButton: {
    backgroundColor: '#fff9c4',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
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
  emptyText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 40,
  },
});
