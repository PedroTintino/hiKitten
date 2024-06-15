import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home';
import Generator from './pages/generator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName='Home'
        >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Generator" component={Generator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
