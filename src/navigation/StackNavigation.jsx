import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home/Home';
import { Image } from 'react-native';
import { imgSrc } from '../assets/imgSrc';
import MovieDetails from '../pages/Home/MovieDetails';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  console.log('StackNavigation')
  return (
    <Stack.Navigator initialRouteName='Main'>
      <Stack.Screen name="Home" component={Home} options={{
        headerTitle: () => (
          <Image
            style={{ height: 50, width: 200, marginLeft: -30 }}
            resizeMode="contain"
            source={imgSrc.logo}
          />
        ),
        headerStyle: {
          backgroundColor: '#202124',
        }
      }} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} options={{
        title: 'Details',
        headerStyle: {
          backgroundColor: '#202124',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: '#fff'
        }
      }} />
    </Stack.Navigator>
  )
}

export default StackNavigation