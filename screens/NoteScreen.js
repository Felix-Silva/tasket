import React, { useState, useRef } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Keyboard, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // handles top bezel/status bar
import { TextInput, Button } from 'react-native-paper';
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function NoteScreen({ route, navigation }) {
  const { note, updateNote } = route.params;
  const [title, setTitle] = useState(note.title || '');
  const [text, setText] = useState(note.text); 
  const richText = useRef();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={{flex:1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
        <View style={styles.contentWrapper}>
          <TextInput
            style={styles.titleInput}
            label="Note title"
            value={title}
            onChangeText={setTitle}
            mode="flat"
            textColor='#fff9c4'
            activeUnderlineColor='#fff9c4'
            underlineColor='#fff9c4'
            autoFocus={!title}
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
              actions.setStrikethrough,
              'keyboard-close',
            ]}
            iconMap={{
              'keyboard-close': () => (
                <Icon
                  name="keyboard-close"
                  size={24}
                  color="#fff9c4"
                  onPress={() => {
                    console.log('Keyboard-close pressed');
                    richText.current?.blurContentEditor();
                    Keyboard.dismiss();
                  }}
                />
              ),
            }}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={styles.buttonWrapper}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2c2c2c',
      padding: 8,
      paddingBottom: 12,
    },
    contentWrapper: {
      flex: 1,
      justifyContent: 'space-between',
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
      borderTopColor: '#fff9c4',
      marginBottom: 10,
    },
    buttonWrapper: {
      position: 'absolute', // probably bad, but it works
      bottom: 50,
      left: 8,
      right: 8,
    },
    saveButton: {
      backgroundColor: '#fff9c4',
      padding: 4,
      borderRadius: 10,
    },
});
