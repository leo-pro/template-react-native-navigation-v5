import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import About from './pages/About';

const Stack = createStackNavigator();

function Routes(){
  return(
    <Stack.Navigator
    initialRouteName="Main"
    screenOptions={
      {
        headerStyle: {
          backgroundColor: '#eee',
        }
      }
    }
    >
      <Stack.Screen name="Main" component={Main} options={{ title: 'Bem-vindo' }}/>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

export default Routes;
