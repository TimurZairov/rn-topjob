import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import Input from '../../components/Input/Input';
import DropDown from '../../components/DropDown/DropDown';
import Button from '../../components/Button/Button';

const MainScreen = () => {
  //state
  const [category, setCategory] = useState({
    post: 'vacancy',
    item: 'Вакансия',
  });
  return (
    <SafeAreaView>
      {/* HEADER */}
      <HeaderLogo />
      <ScrollView>
        {/* MAIN & Search */}
        <View style={styles.mainWork}>
          <View style={styles.mainBg}>
            <Image
              source={require('../../assets/images/mainBg.png')}
              resizeMode="cover"
            />
          </View>
          {/* SEARCH */}
          <View style={styles.container}>
            <Text style={styles.title}>Хороша любая работа</Text>
            <View style={styles.mainAction}>
              <Input placeholder="Ищу сантехника" />
              <DropDown setCategory={setCategory} category={category} />
              <Button style={{width: '100%'}}>Найти</Button>
            </View>
            <Text style={styles.start}>
              Стать исполнителем и начать зарабатывать
            </Text>
          </View>
          {/* Top Vacancy */}
          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  mainWork: {
    height: 416,
  },
  mainBg: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 32,
    textAlign: 'center',
  },
  mainAction: {
    justifyContent: 'space-around',
    height: 160,
  },
  start: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.default,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
