// import {DrawerNavigationProp} from '@react-navigation/drawer';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack'; // navigate | replace | push | etc...

export type DrawerNavigationParams = {
  Stack: undefined;
};

export type StackNavigationParams = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Fill: undefined;
  Create: undefined;
  Map: undefined;
  Category: undefined;
  Detail: {id: string | unknown; key: string};
  Tab: undefined;
};

export type TabNavigationParams = {
  Vacancy: undefined;
  Service: undefined;
  Main: undefined;
  Task: undefined;
  Profile: undefined;
};
//detail screen
export type DetailNavigationProp = StackNavigationProp<
  StackNavigationParams,
  'Detail'
>;

//create screen
export type CreateScreenNavigationProp = StackNavigationProp<
  StackNavigationParams,
  'Category'
>;

//
