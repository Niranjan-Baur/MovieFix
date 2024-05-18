import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';
import StackNavigation from './StackNavigation';
import BottomTabNavigation from './BottomTabNavigation';

const AppNavigator = () => {
  console.log('AppNavigator');
  return (
    <NavigationContainer>
      {/* <DrawerNavigation /> */}
      <StackNavigation />
      {/* <BottomTabNavigation /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
