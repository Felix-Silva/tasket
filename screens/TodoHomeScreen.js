import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';

export default function TodoHomeScreen() {
  const [ToDos, setToDos] = useState([
      { id: '1', text: 'What To Do' },
      { id: '2', text: 'List of Books' },
      { id: '3', text: 'Food Left to Try' },
    ]);
  
    const renderItem = ({ item }) => (
      <Pressable
        style={styles.item}
        onPress={() => {
          console.log('Tapped To-Do:', item.text);
          // soon: navigation.navigate('ToDoDetail', { todo: item })
        }}
      >
        <Text style={styles.text}>{item.text}</Text>
      </Pressable>
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={ToDos}
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
