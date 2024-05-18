import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from '../pages/Settings/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({ navigation }) => {
  console.log('Bottom Tab Navigation')
  return (
    <Tab.Navigator screenOptions={{
      headerLeft: () =>
        <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => {
          navigation.openDrawer();
        }} activeOpacity={1}>
          <Avatar.Icon icon='account' size={30} />
          {/* <MaterialCommunityIcons name="home" color='black' size={26} /> */}
        </TouchableOpacity>,
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: true,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
        tabBarLabel: 'Home',
      }} />
      <Tab.Screen name="Settings" component={Settings} options={{
        headerShown: true,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="water-remove" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: true,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
