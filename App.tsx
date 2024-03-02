import {View} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import MainScreen from './src/screens/MainScreen/MainScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <View>
        <MainScreen />
      </View>
    </SafeAreaProvider>
  );
};

export default App;
