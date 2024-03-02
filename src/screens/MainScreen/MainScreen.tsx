import {
  Image,
  Platform,
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
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import Input from '../../components/Input/Input';
import DropDown from '../../components/DropDown/DropDown';
import Button from '../../components/Button/Button';
import TopVacancies from '../../components/TopVacancies/TopVacancies';
import Create from '../../components/Create/Create';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import CreateButton from '../../components/CreateButton/CreateButton';

const MainScreen = () => {
  const insets = useSafeAreaInsets();
  //state
  const [category, setCategory] = useState({
    post: 'vacancy',
    item: 'Вакансия',
  });
  return (
    <>
      <SafeAreaView style={styles.safe}>
        {/* HEADER */}
        <HeaderLogo />
        <ScrollView>
          {/* MAIN & Search */}
          <View
            style={{
              paddingBottom:
                Platform.OS === 'android'
                  ? 160
                  : Math.max(insets.bottom, 16) + 50,
            }}>
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
            <Create />
            {/* How IT WORKS */}
            <HowItWorks />
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={{position: 'absolute', bottom: 30, right: 30}}>
        <CreateButton />
      </View>
    </>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: COLORS.white,
  },
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
});
