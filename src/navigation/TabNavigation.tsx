import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
//
import MainScreen from '../screens/MainScreen/MainScreen';
import VacanciesScreen from '../screens/VacanciesScreen/VacanciesScreen';
import ServicesScreen from '../screens/ServicesScree/ServicesScreen';
import TaskScreen from '../screens/TaskScreen/TaskScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import MainTab from '../assets/icons/MainTab';
import {COLORS} from '../theme/theme';
import TaskTab from '../assets/icons/TaskTab';
import ProfileTab from '../assets/icons/ProfileTab';
import ServiceTab from '../assets/icons/ServiceTab';
import VacancyTab from '../assets/icons/VacancyTab';
import {Platform} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.mainOrange,
        tabBarInactiveTintColor: COLORS.darkGrey,
        tabBarStyle: {
          height: 70,
          paddingBottom: Platform.OS === 'android' ? 12 : 20,
        },
        tabBarLabelStyle: {margin: 0, padding: 0},
      }}
      initialRouteName="Main">
      <Tab.Screen
        name="Vacancy"
        component={VacanciesScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => {
            return <VacancyTab color={color} />;
          },
          tabBarLabel: 'Вакансии',
        }}
      />
      <Tab.Screen
        name="Service"
        component={ServicesScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => {
            return <ServiceTab color={color} />;
          },
          tabBarLabel: 'Услуги',
        }}
      />
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => {
            return <MainTab color={color} />;
          },
          tabBarLabel: 'Главная',
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => {
            return <TaskTab color={color} />;
          },
          tabBarLabel: 'Задачи',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => {
            return <ProfileTab color={color} />;
          },
          tabBarLabel: 'Профиль',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
