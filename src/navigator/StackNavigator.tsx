import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screens } from '../screens/Pantalla1Screens';
import { Pantalla2Screens } from '../screens/Pantalla2Screens';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      cardStyle: {
        backgroundColor: '#010534'
      }
    }}>

      <Stack.Screen name="Pantalla1" options={{ headerShown: false }} component={Pantalla1Screens} />
      <Stack.Screen name="Pantalla2" options={{ title: 'Formulario' }} component={Pantalla2Screens} />

    </Stack.Navigator>
  );
}