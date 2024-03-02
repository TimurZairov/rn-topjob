import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
//
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import {COLORS, FONTS, SIZES, width} from '../../theme/theme';
import Input from '../../components/Input/Input';
import DropDown from '../../components/DropDown/DropDown';
import Button from '../../components/Button/Button';
import TopVacancies from '../../components/TopVacancies/TopVacancies';

const MainScreen = () => {
  const insets = useSafeAreaInsets();
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
        <View style={{paddingBottom: Math.max(insets.bottom, 16) + 100}}>
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
          </View>

          {/* Top Vacancy */}
          <View style={styles.mainTop}>
            <TopVacancies />
          </View>
          {/* CREATE ADV */}
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
  mainTop: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    height: 450,
    paddingVertical: 24,
  },
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
