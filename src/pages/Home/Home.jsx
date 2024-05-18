import { View, FlatList } from 'react-native';
import React from 'react';
import { Button, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../redux/slices/todoSlice';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Helloo</Text>
    </View>
  );
};

export default Home;
