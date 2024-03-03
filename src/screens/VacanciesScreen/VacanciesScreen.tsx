import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
//
import Header from '../../components/Header/Header';
import {COLORS} from '../../theme/theme';
import Card from '../../components/Card/Card';
import CreateButton from '../../components/CreateButton/CreateButton';

const VacanciesScreen = () => {
  return (
    <View style={{flex: 1}}>
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
      <View style={{position: 'absolute', bottom: 30, right: 30}}>
        <CreateButton />
      </View>
    </View>
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
