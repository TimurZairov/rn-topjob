import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
//
import {COLORS, FONTS, width} from '../../theme/theme';
import Button from '../Button/Button';

const Create: () => Element = () => {
  return (
    <View style={styles.adv}>
      <View style={styles.servicesBg}>
        <Image
          source={require('../../assets/images/service_bg.png')}
          resizeMode="cover"
        />
      </View>
      <View style={styles.services}>
        <View>
          <Text style={styles.servicesText}>
            Хотите разместить свои услуги?
          </Text>
          <Text style={styles.servicesText}>
            Расскажите о них — клиенты напишут сами
          </Text>
        </View>
        <Button
          style={{width: width / 2, backgroundColor: COLORS.white}}
          textStyle={{color: COLORS.black, fontFamily: FONTS.bold}}>
          Создать заказ
        </Button>
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  adv: {
    height: 210,
    backgroundColor: COLORS.mainOrange,
  },
  servicesBg: {
    ...StyleSheet.absoluteFillObject,
  },
  services: {
    padding: 20,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  servicesText: {
    color: COLORS.white,
    fontSize: 22,
    fontFamily: FONTS.bold,
    textAlign: 'center',
  },
});
