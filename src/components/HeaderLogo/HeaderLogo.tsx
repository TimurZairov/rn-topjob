import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

//
import {COLORS, height} from '../../theme/theme';
import BackArrow from '../../assets/icons/BackArrow';

interface IHeaderLogo {
  isVisible?: boolean;
}

const HeaderLogo = ({isVisible}: IHeaderLogo) => {
  return (
    <View style={styles.header}>
      <View style={styles.wrapper}>{isVisible ? <BackArrow /> : null}</View>
      <Image source={require('../../assets/images/logo.png')} />
      <View style={styles.wrapper} />
    </View>
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({
  header: {
    height: height / 10,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  wrapper: {
    width: '10%',
  },
});
