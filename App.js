import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NotesScreen from './screens/NotesScreen';
import TodoScreen from './screens/TodoScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#2c2c2c' },
          headerTintColor: '#fff9c4',
          tabBarStyle: { backgroundColor: '#2c2c2c', borderTopColor: '#3c3c3c' },
          tabBarActiveTintColor: '#ffeb85',
          tabBarInactiveTintColor: '#bbb',
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Notes') {
              iconName = 'document-text-outline';
            } else if (route.name === 'To-Do') {
              iconName = 'checkmark-done-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >

        <Tab.Screen name="Notes" component={NotesScreen} />
        <Tab.Screen name="To-Do" component={TodoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
