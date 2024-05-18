import { View, Text } from 'react-native'
import React, { Profiler } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/Home';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  console.log('StackNavigation')
  return (
    <Stack.Navigator initialRouteName='Main'>
      <Stack.Screen name="Profile" component={Home} />
    </Stack.Navigator>
  )
}

export default StackNavigation