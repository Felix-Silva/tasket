import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { Button } from 'react-native-paper';

export default function NoteHomeScreen({ navigation }) {
  const [notes, setNotes] = useState([]);

  // navigate to NoteScreen for a new note
  const addNote = () => {
    const newId = Date.now().toString();

    navigation.navigate('NoteScreen', {
      note: { id: newId, text: '' }, // empty text for new note
      updateNote: (updatedText) => {
        setNotes((prev) => {
          // if note already exists, update it
          const exists = prev.find((n) => n.id === newId);
          if (exists) {
            return prev.map((n) =>
              n.id === newId ? { ...n, text: updatedText } : n
            );
          }
          // otherwise add a new note
          return [...prev, { id: newId, text: updatedText }];
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
          updateNote: (updatedText) => {
            setNotes((prev) =>
              prev.map((n) =>
                n.id === item.id ? { ...n, text: updatedText } : n
              )
            );
          },
        })
      }
    >
      <Text style={styles.text}>{item.text}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={addNote} style={styles.addButton} labelStyle={{color: '#2c2c2c', fontWeight:'bold'}}>
        Add Note
      </Button>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No notes yet. Add one!</Text>
        }
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
