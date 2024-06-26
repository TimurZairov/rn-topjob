import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {DrawerActionHelpers, useNavigation} from '@react-navigation/native';

const BurgerIcon = () => {
  const navigation = useNavigation<DrawerActionHelpers<never>>();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <TouchableOpacity onPress={openDrawer}>
      <Svg width="22" height="17" viewBox="0 0 22 17" fill="none">
        <Path
          d="M20.6343 7.27017H1.36551C0.79541 7.27017 0.333252 7.83571 0.333252 8.53333C0.333252 9.23095 0.79541 9.79649 1.36551 9.79649H20.6343C21.2044 9.79649 21.6666 9.23095 21.6666 8.53333C21.6666 7.83571 21.2044 7.27017 20.6343 7.27017Z"
          fill="#222222"
        />
        <Path
          d="M20.6343 0.533325H1.36551C0.79541 0.533325 0.333252 1.09886 0.333252 1.79648C0.333252 2.49411 0.79541 3.05964 1.36551 3.05964H20.6343C21.2044 3.05964 21.6666 2.49411 21.6666 1.79648C21.6666 1.09886 21.2044 0.533325 20.6343 0.533325Z"
          fill="#222222"
        />
        <Path
          d="M10.3117 14.007H1.36551C0.79541 14.007 0.333252 14.5726 0.333252 15.2702C0.333252 15.9678 0.79541 16.5333 1.36551 16.5333H10.3117C10.8818 16.5333 11.344 15.9678 11.344 15.2702C11.344 14.5726 10.8818 14.007 10.3117 14.007Z"
          fill="#222222"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default BurgerIcon;
