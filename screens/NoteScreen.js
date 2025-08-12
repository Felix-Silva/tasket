import React, { useState, useRef } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor';

export default function NoteScreen({ route, navigation }) {
  const { note, updateNote } = route.params;
  const [title, setTitle] = useState(note.title || '');
  const [text, setText] = useState(note.text);
  const richText = useRef();

  return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={{flex:1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
        >
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
            <RichEditor
              ref={richText}
              style={styles.noteInput}
              initialContentHTML={text}
              placeholder="Write a note..."
              editorStyle={{
                backgroundColor: '#2c2c2c',
                color: '#fff9c4',
                placeholderColor: '#fff9c4'
              }}
              onChange={setText}
            />
            <RichToolbar
              editor={richText}
              style={styles.toolbar}
              selectedIconTint="#8f8636ff"
              iconTint="#fff9c4"
              actions={[
                actions.setBold,
                actions.setItalic,
                actions.setUnderline,
                actions.insertBulletsList,
                actions.insertOrderedList,
                actions.setStrikethrough
              ]}
            />
          </View>
        </KeyboardAvoidingView>
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
    toolbar: {
        backgroundColor: '#2c2c2c',
        borderTopWidth: 1,
        borderTopColor: '#ffff9c4',
        marginBotton: 10,
    },
    saveButton: {
        backgroundColor: '#fff9c4',
        padding: 4,
        marginBottom: 12,
        borderRadius: 10,
    },
});
