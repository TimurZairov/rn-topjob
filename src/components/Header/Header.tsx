import {StyleSheet, View} from 'react-native';
import React from 'react';
import {COLORS, height} from '../../theme/theme';
import Input from '../Input/Input';
import FilterIcon from '../../assets/icons/FilterIcon';

const Header = () => {
  return (
    <View style={styles.header}>
      <Input placeholder="Например: Бухгалтер" style={{width: '90%'}} />
      <FilterIcon />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: height / 10,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderStartColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
