import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import AppContextProvider from './src/context/context';

const App = () => {
  return (
    <AppContextProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <StackNavigation />
        </SafeAreaProvider>
      </NavigationContainer>
    </AppContextProvider>
  );
};

export default App;
