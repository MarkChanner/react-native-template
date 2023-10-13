import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ROUTES } from './src/navigation/routes';
import { RootStackParamList } from './src/navigation/types';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTES.HomeScreen} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
