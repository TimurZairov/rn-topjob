import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Tab" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
