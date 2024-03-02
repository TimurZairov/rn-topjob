import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import StepToStart from '../StepToStart/StepToStart';

const HowItWorks = () => {
  return (
    <LinearGradient
      colors={[COLORS.darkBlue, COLORS.lightBlue]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.gradient}>
      <Text style={styles.title}>Как работает платформа TopJobs.uz</Text>
      {/* TABS */}
      <View style={styles.tabs}>
        <View style={styles.tab}>
          <Text style={styles.text}>Вакансии</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.text}>Услуги</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.text}>Задачи</Text>
        </View>
      </View>
      {/* LIne */}
      <View style={styles.backLine}>
        <View style={styles.backLineContainer}>
          <View style={styles.line} />
        </View>
      </View>
      {/* Steps */}
      <StepToStart step={1} title={'Войдите или создайте аккаунт на сайте'} />
      <StepToStart
        step={2}
        title={'Создайте объявление в нужной вам категории'}
      />
      <StepToStart
        step={3}
        title={'Запонните объявление необходимыми данными'}
      />
      <StepToStart
        step={4}
        title={'Ждите отклика от других пользователей сайта'}
      />
      <Text style={styles.desc}>
        С нами больше не нужно тратить время на поиск клиентов! Более 100 новых
        заданий каждую неделю!
      </Text>
    </LinearGradient>
  );
};

export default HowItWorks;

const styles = StyleSheet.create({
  gradient: {
    paddingHorizontal: 12,
    paddingVertical: 26,
  },
  title: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 32,
    textAlign: 'center',
  },
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  tab: {
    width: '33.3%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.md,
    fontFamily: FONTS.bold,
  },
  backLine: {
    borderBottomWidth: 1,
    borderColor: COLORS.white,
    marginTop: 15,
  },
  backLineContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  line: {
    width: '33.3%',
  },
  desc: {
    color: COLORS.white,
    opacity: 0.7,
    textAlign: 'center',
    marginTop: 40,
  },
});
