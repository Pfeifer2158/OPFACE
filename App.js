import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login'
import Cadastro from './cadastro'
import Index from './index'

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="cadastro" component={Cadastro} />
      <Stack.Screen name="Index" component={Index} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
