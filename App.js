import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Fonts from './fonts';
import Start from './Start';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{
          headerStyle: { backgroundColor: '#00AFB9' },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Fonts"
          component={Fonts}
        />
        <Stack.Screen
          name="Start"
          component={Start}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;