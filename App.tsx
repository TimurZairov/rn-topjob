import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/TabNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <TabNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
