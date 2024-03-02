import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, SIZES} from '../../theme/theme';

const CreateButton = () => {
  return (
    <TouchableOpacity>
      <LinearGradient
        style={styles.btn}
        colors={[COLORS.darkBlue, COLORS.lightBlue]}>
        <Text style={styles.plus}>+</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CreateButton;

const styles = StyleSheet.create({
  btn: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    color: COLORS.white,
    fontSize: SIZES.xxlg,
  },
});
