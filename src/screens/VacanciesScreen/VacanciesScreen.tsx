import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {COLORS} from '../../theme/theme';
import Card from '../../components/Card/Card';

const VacanciesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Header />
      </View>
      {/* CARD */}
      <View style={{paddingHorizontal: 10}}>
        <Card />
      </View>
    </SafeAreaView>
  );
};

export default VacanciesScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: COLORS.borderColor,
    marginBottom: 20,
  },
});
