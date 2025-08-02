import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Pressable style={styles.block} onPress={() => navigation.navigate('Notes')}>
          <Text style={styles.blockText}>📝 Notes</Text>
        </Pressable>

        <Pressable style={styles.block} onPress={() => navigation.navigate('ToDo')}>
          <Text style={styles.blockText}>✅ To-Do</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8dc', // legal pad
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  column: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    backgroundColor: '#ffeb85', // deeper yellow
    marginVertical: 10,
    paddingVertical: 80,
    paddingHorizontal: 30,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    width: '80%',
    alignItems: 'center',
  },
  blockText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
