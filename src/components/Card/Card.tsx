import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import CalendarIcon from '../../assets/icons/CalendarIcon';
import ViewIcon from '../../assets/icons/ViewIcon';

const Card = () => {
  return (
    <View style={styles.card}>
      {/* CardHeader */}
      <View style={styles.cardHeader}>
        <Text style={styles.name}>CompanyName</Text>
        <View style={styles.data}>
          <CalendarIcon color={COLORS.darkGrey} />
          <Text style={styles.dataText}>20.12.2024</Text>
          <Text style={{marginHorizontal: 6, color: COLORS.darkGrey}}>|</Text>
          <ViewIcon color={COLORS.darkGrey} />
          <Text style={styles.dataText}>559</Text>
        </View>
      </View>
      {/* CARD MAIN */}
      <View style={styles.cardMain}>
        <Image
          source={{
            uri: 'https://api.logobank.uz/media/logos_preview/just-01.jpg',
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.cardName}>
          <Text style={styles.vacancyName}>Графический дизайнер</Text>
          <Text style={styles.salary}>от 6-9 млн сум</Text>
        </View>
      </View>
      {/* CARD DESCRIPTION */}
      <View style={styles.desc}>
        <Text style={styles.descText}>
          Описание: Здравствуйте я арт-директор Рек. аг. Мандарин нам требуются
          дизайнеры аг. Мандарин нам требуются дизайнеры нам требуются арт...
        </Text>
      </View>
      <Text style={styles.descText}>Ташкент - Шайхонтохурский район</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: COLORS.grey,
    borderRadius: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.borderColor,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  name: {
    color: COLORS.textGrey,
    fontSize: SIZES.default,
  },
  data: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataText: {
    color: COLORS.darkGrey,
    fontSize: SIZES.default,
    marginLeft: 6,
  },
  cardMain: {
    flexDirection: 'row',
    marginTop: 14,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 20,
  },
  cardName: {
    height: 50,
    justifyContent: 'space-between',
  },
  vacancyName: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: SIZES.slg,
  },
  salary: {
    color: COLORS.mainOrange,
    fontFamily: FONTS.bold,
    fontSize: SIZES.slg,
  },
  desc: {marginBottom: 20},
  descText: {
    color: COLORS.textGrey,
    fontSize: SIZES.md,
  },
});
