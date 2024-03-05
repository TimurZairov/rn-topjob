import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../theme/theme';

interface IScreenTitle {
  children: string;
}

const ScreenTitle = ({children}: IScreenTitle) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default ScreenTitle;

const styles = StyleSheet.create({
  text: {
    color: COLORS.black,
    fontSize: SIZES.xlg,
    fontFamily: FONTS.bold,
    marginTop: 30,
  },
});
