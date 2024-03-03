import {StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/theme';

interface ITextInput {
  placeholder?: string;
  style?: ViewStyle;
}

const Input = ({placeholder = '', style}: ITextInput) => {
  return (
    <View style={[styles.input, style]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={COLORS.darkGrey}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: 40,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.borderColor,
  },
  textInput: {
    width: '100%',
    height: '100%',
  },
});
