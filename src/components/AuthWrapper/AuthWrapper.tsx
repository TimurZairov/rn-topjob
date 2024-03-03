import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import Input from '../Input/Input';

interface IAuthWrapper {
  label: string;
  placeholder: string;
  margin?: number;
}

const AuthWrapper = ({label, placeholder, margin = 0}: IAuthWrapper) => {
  return (
    <View style={{marginTop: margin}}>
      <Text style={styles.label}>{label}</Text>
      <Input placeholder={placeholder} />
    </View>
  );
};

export default AuthWrapper;

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
    fontSize: SIZES.default,
    fontFamily: FONTS.medium,
  },
});
