import {StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, SIZES} from '../../theme/theme';

interface ITextInput {
  placeholder?: string;
  style?: ViewStyle;
  setState?: (input: string) => void | undefined;
  state?: string;
  secureTextEntry?: boolean;
}

const Input = ({
  placeholder = '',
  style,
  setState,
  state,
  secureTextEntry,
}: ITextInput) => {
  const [inputState, setInputState] = useState('');

  useEffect(() => {
    if (setState !== undefined) {
      setState(inputState);
    } else if (state) {
      setInputState(state);
    }
  }, [inputState, setState, state]);

  return (
    <View style={[styles.input, style]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={COLORS.darkGrey}
        onChangeText={setInputState}
        value={inputState}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
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
    height: 40,
    fontSize: SIZES.md,
  },
});
