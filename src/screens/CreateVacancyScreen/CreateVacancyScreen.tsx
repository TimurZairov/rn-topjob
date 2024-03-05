import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import {COLORS} from '../../theme/theme';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';

const CreateVacancyScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <HeaderLogo isVisible />
      <ScrollView>
        <ScreenTitle>Создание вакансии</ScreenTitle>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateVacancyScreen;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: COLORS.white,
  },
});
