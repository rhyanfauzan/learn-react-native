import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, NewsScreen} from '../pages';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewsScreen" component={NewsScreen} />
    </Stack.Navigator>
  );
};

export default Router;
