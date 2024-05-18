/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar animated={true} backgroundColor="#dd5f46" />
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
