import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
//
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import StackNavigation from './src/navigation/StackNavigation';
import AppContextProvider from './src/context/context';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            <StackNavigation />
            <Toast />
          </SafeAreaProvider>
        </NavigationContainer>
      </AppContextProvider>
    </Provider>
  );
};

export default App;
