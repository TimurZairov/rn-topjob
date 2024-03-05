import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import TabNavigation from './TabNavigation';
import {StackNavigationParams} from './types/types';
import CreateVacancyScreen from '../screens/CreateVacancyScreen/CreateVacancyScreen';

const Stack = createStackNavigator<StackNavigationParams>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="CreateVacancy" component={CreateVacancyScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
