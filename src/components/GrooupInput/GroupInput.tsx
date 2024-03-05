import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS, SIZES} from '../../theme/theme';
import Input from '../Input/Input';

interface IGroupInput {
  label: string;
  placeholder: string;
}

const GroupInput = ({label, placeholder}: IGroupInput) => {
  return (
    <View style={styles.inputs}>
      <Text style={styles.label}>{label}</Text>
      <Input placeholder={placeholder} />
    </View>
  );
};

export default GroupInput;

const styles = StyleSheet.create({
  inputs: {
    marginTop: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: SIZES.default,
    fontFamily: FONTS.medium,
  },
});
