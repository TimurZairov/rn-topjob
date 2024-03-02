import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

//
import {COLORS, height} from '../../theme/theme';

const HeaderLogo = () => {
  return (
    <View style={styles.header}>
      <Image source={require('../../assets/images/logo.png')} />
    </View>
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({
  header: {
    height: height / 10,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
