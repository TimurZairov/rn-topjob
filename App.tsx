import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {FONTS} from './src/theme/theme';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{fontFamily: FONTS.light}}>App</Text>
    </SafeAreaView>
  );
};

export default App;
