import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../theme/theme';

const CardSmall = () => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.cardTitle}>Ремонт квартиры</Text>
      <Text style={styles.userContract}>Аласов Р. Цена договорная</Text>
    </TouchableOpacity>
  );
};

export default CardSmall;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderColor: COLORS.borderColor,
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 5,
    justifyContent: 'center',
  },
  cardTitle: {
    color: COLORS.mainOrange,
    fontSize: SIZES.md,
    fontFamily: FONTS.medium,
  },
  userContract: {
    color: COLORS.black,
    fontSize: SIZES.default,
    fontFamily: FONTS.light,
    marginTop: 4,
  },
});
