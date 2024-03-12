import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import AppContextProvider from './src/context/context';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppContextProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            <StackNavigation />
          </SafeAreaProvider>
        </NavigationContainer>
      </AppContextProvider>
    </Provider>
  );
};

export default App;
