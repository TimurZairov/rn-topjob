import {NavigatorScreenParams} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type StackNavigationParams = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Create: undefined;
  Map: undefined;
  Category: undefined;
  Tab: NavigatorScreenParams<TabNavigationParams>;
};

export type TabNavigationParams = {
  Vacancy: undefined;
  Service: undefined;
  Main: undefined;
  Task: undefined;
  Profile: undefined;
};

export type StackNavigationParamsProps =
  StackNavigationProp<StackNavigationParams>;
