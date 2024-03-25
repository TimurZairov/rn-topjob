import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {enableLatestRenderer} from 'react-native-maps';
//
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import AppContextProvider from './src/context/context';
import {store} from './src/redux/store';
import DrawerNavigation from './src/navigation/DrawerNavigation';

enableLatestRenderer();

const App = () => {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            <DrawerNavigation />
            <Toast />
          </SafeAreaProvider>
        </NavigationContainer>
      </AppContextProvider>
    </Provider>
  );
};

export default App;
