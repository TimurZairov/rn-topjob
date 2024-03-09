import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../../theme/theme';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Tab');
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.splash}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../../assets/images/mainLogo.png')}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  logo: {
    width: 150,
    height: 150,
  },
});
