import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/theme';

interface ITextInput {
  placeholder?: string;
}

const Input = ({placeholder = ''}: ITextInput) => {
  return (
    <View style={styles.input}>
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
  },
  textInput: {
    width: '100%',
    height: '100%',
  },
});
