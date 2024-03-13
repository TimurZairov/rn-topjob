import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {COLORS, FONTS, SIZES} from '../../theme/theme';

interface IButton {
  children: ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
  loading?: boolean;
}

const Button = ({children, style, textStyle, onPress, loading}: IButton) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={COLORS.white} size={16} />
      ) : (
        <Text style={[styles.btnText, textStyle]}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.mainOrange,
    paddingVertical: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  btnText: {
    color: COLORS.white,
    fontSize: SIZES.default,
    fontFamily: FONTS.light,
  },
});
