import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function NoteScreen({ route, navigation }) {
  const { note, updateNote } = route.params;
  const [text, setText] = useState(note.text);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        label="Write a note"
        value={text}
        onChangeText={setText}
        mode="flat"
        multiline
        textColor='#fff9c4'
        activeUnderlineColor='#fff9c4'
        underlineColor='#fff9c4'
      />
      <Button
        mode="contained"
        onPress={() => {
          updateNote(text);
          navigation.goBack();
        }}
        style={styles.saveButton}
        labelStyle={{color: '#2c2c2c', fontWeight:'bold'}}
      >
        Save
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
    input: {
        backgroundColor: '#2c2c2c',
        marginBottom: 20,
    },
    saveButton: {
        backgroundColor: '#fff9c4',
        padding: 16,
        marginBottom: 12,
        borderRadius: 10,
  },
});
