import React from 'react';
import { NavigationContainer, DarkTheme, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import NoteHomeScreen from './screens/NoteHomeScreen';
import NoteScreen from './screens/NoteScreen.js';
import TodoHomeScreen from './screens/TodoHomeScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const NotesStack = createNativeStackNavigator();

function NotesStackScreen() {
  return (
    <NotesStack.Navigator screenOptions={{headerShown: false}}>
      <NotesStack.Screen name="NoteHome" component={NoteHomeScreen} />
      <NotesStack.Screen name="NoteScreen" component={NoteScreen} />
    </NotesStack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';

          return {
            headerShown: false,
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
            
            tabBarStyle:
              route.name === 'Notes' && routeName === 'NoteScreen'
                ? { display: 'none' } // hide bottom bar on note screen in stack
                : { backgroundColor: '#2c2c2c', borderTopColor: '#3c3c3c' },
          };
        }}
      >
        <Tab.Screen name="Notes" component={NotesStackScreen} />
        <Tab.Screen name="To-Do" component={TodoHomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}