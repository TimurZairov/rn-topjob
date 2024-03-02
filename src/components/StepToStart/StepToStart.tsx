import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, width} from '../../theme/theme';

const StepToStart = ({step, title}: {step: number; title: string}) => {
  return (
    <View style={styles.steps}>
      <View style={styles.circle}>
        <Text style={styles.number}>{step}</Text>
      </View>
      <View style={{width: width - 125}}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default StepToStart;

const styles = StyleSheet.create({
  steps: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
  },
  circle: {
    width: 70,
    aspectRatio: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginRight: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  number: {
    color: COLORS.black,
    fontSize: 30,
    fontFamily: FONTS.bold,
  },
  title: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.md,
    lineHeight: 20,
  },
});
