import {StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
//
import {FONTS, SIZES} from '../../theme/theme';
import Input from '../Input/Input';

interface IAuthWrapper {
  label: string;
  placeholder: string;
  margin?: number;
  setState?: Dispatch<SetStateAction<string>>;
  secureTextEntry?: boolean;
}

const AuthWrapper = ({
  label,
  placeholder,
  margin = 0,
  setState,
  secureTextEntry,
}: IAuthWrapper) => {
  return (
    <View style={{marginTop: margin}}>
      <Text style={styles.label}>{label}</Text>
      <Input
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        setState={setState}
      />
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
