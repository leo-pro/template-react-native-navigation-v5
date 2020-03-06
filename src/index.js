import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import {Button, StatusBar} from 'react-native';

import Routes from './routes';

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content"/>
      <Routes></Routes>
    </NavigationContainer>
  );
}

export default App;
