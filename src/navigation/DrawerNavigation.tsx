import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import DrawerScreen from '../screens/DrawerScreen/DrawerScreen';
import {COLORS} from '../theme/theme';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        // swipeEnabled: false,
        drawerStyle: {
          backgroundColor: COLORS.white,
          width: 300,
          paddingHorizontal: 10,
        },
      }}
      drawerContent={props => <DrawerScreen {...props} />}>
      <Drawer.Screen name={'Stack'} component={StackNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;