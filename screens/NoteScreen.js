import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function NoteScreen({ route, navigation }) {
  const { note, updateNote } = route.params;
  const [title, setTitle] = useState(note.title || '');
  const [text, setText] = useState(note.text);

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <TextInput
          style={styles.titleInput}
          label="Note title"
          value={title}
          onChangeText={setTitle}
          mode="flat"
          textColor='#fff9c4'
          activeUnderlineColor='#fff9c4'
          underlineColor='#fff9c4'
        />
        <TextInput
          style={styles.noteInput}
          label="Write a note"
          value={text}
          onChangeText={setText}
          mode="flat"
          multiline
          textColor='#fff9c4'
          activeUnderlineColor='#fff9c4'
          underlineColor='#fff9c4'
        />
      </View>
      <Button
        mode="contained"
        onPress={() => {
          updateNote(title, text);
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
    titleInput: {
        backgroundColor: '#2c2c2c',
        marginBottom: 20,
    },
    noteInput: {
      backgroundColor: '#2c2c2c',
      flex: 1,
      marginBottom: 10,
    },
    saveButton: {
        backgroundColor: '#fff9c4',
        padding: 4,
        marginBottom: 12,
        borderRadius: 10,
    },
});
