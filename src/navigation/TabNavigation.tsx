import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MainScreen from '../screens/MainScreen/MainScreen';
import VacanciesScreen from '../screens/VacanciesScreen/VacanciesScreen';
import ServicesScreen from '../screens/ServicesScree/ServicesScreen';
import TaskScreen from '../screens/TaskScreen/TaskScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="Main">
      <Tab.Screen name="Vacancy" component={VacanciesScreen} />
      <Tab.Screen name="Service" component={ServicesScreen} />
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Task" component={TaskScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
