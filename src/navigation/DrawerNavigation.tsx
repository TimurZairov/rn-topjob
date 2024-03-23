import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import DrawerScreen from '../screens/DrawerScreen/DrawerScreen';
import {COLORS} from '../theme/theme';
import {DrawerNavigationParams} from './types/types';

const Drawer = createDrawerNavigator<DrawerNavigationParams>();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: COLORS.white,
          width: 300,
          paddingHorizontal: 10,
        },
        swipeEnabled: false,
      }}
      drawerContent={props => <DrawerScreen {...props} />}>
      <Drawer.Screen name={'Stack'} component={StackNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
