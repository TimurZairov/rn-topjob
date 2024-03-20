import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Title from '../../components/Title/Title';
import {COLORS, FONTS, SIZES, width} from '../../theme/theme';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import Button from '../../components/Button/Button';
import ContainerBlock from '../../components/ContainerBlock/ContainerBlock';

import CheckedIcon from '../../assets/icons/CheckedIcon';
import UserReview from '../../components/UserReview/UserReview';
import CardSmall from '../../components/CardSmall/CardSmall';
import LinearGradient from 'react-native-linear-gradient';

interface IDetailScreen {
  screen: string;
}

const DetailScreen = ({}: IDetailScreen) => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <HeaderLogo />
        <ScrollView style={styles.scroll}>
          <Title textStyle={styles.textTitle}>Курьер - Водитель </Title>
          <View style={styles.infoContainer}>
            {/* INFO */}
            <View style={styles.info}>
              <Text style={styles.infoText}>74 просмотра</Text>
              <Text style={styles.infoText}> | </Text>
              <Text style={styles.infoText}>создано: 23.10.20</Text>
            </View>

            <View style={[styles.info, {marginTop: 10}]}>
              <Text style={styles.infoText}>Дизайн</Text>
              <Text style={styles.infoText}> | </Text>
              <Text style={styles.infoText}>Ташкент</Text>
            </View>

            <Text style={[styles.salary, {marginTop: 10}]}>от 3-6 млн сум</Text>
          </View>
          {/* DESCRIPTION */}
          <View style={styles.descContainer}>
            <Title textStyle={styles.descTitle}>Описание</Title>
            <Text style={styles.desc}>
              Здравствуйте. Расскажу коротка о процессе разработки сайта. На
              разработку корпоративного сайта уйдет 10 дней. С вас требуется: 1.
              Информация о вашей деятельности 2. Ваши продукции или услуги 3.
              Ваши контакты 4. Фотография ваших товаров Примеры сайтов которые я
              разработал: Yaraagro.uz Doctor-admin.netlify.app
            </Text>
          </View>
          {/* IMAGES IF EXIST */}
          <View style={styles.sliderContainer}>
            <View />
          </View>
          {/* BUTTONS */}
          <View style={styles.btnContainer}>
            <Button
              style={{backgroundColor: COLORS.green, width: width * 0.45}}>
              Позвонить
            </Button>
            <Button style={{width: width * 0.45}}>Написать</Button>
          </View>
          {/* USer */}
          <ContainerBlock style={styles.block}>
            <Image
              source={{
                uri: 'https://api.logobank.uz/media/logos_preview/just-01.jpg',
              }}
              style={styles.userImage}
            />
            <View>
              <View style={styles.userInfo}>
                <Title style={{marginRight: 6}} textStyle={styles.descTitle}>
                  Amaya Soft
                </Title>
                <CheckedIcon />
              </View>
              <Text style={styles.infoText}>
                Ташкент, Шайхонтохурский район
              </Text>
              <View style={{width: 120, marginTop: 10}}>
                <UserReview likes={20} dislikes={20} />
              </View>
            </View>
          </ContainerBlock>
          {/* all publish */}
          <ContainerBlock
            style={{
              paddingVertical: 10,
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Title textStyle={styles.descTitle}>Все объявления автора</Title>
          </ContainerBlock>
          {/* Map */}
          <ContainerBlock
            style={{
              paddingVertical: 10,
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <View style={styles.map} />
          </ContainerBlock>
          {/* JOBS */}
          <Title style={{marginBottom: 5}} textStyle={styles.textTitle}>
            Активные задачи:
          </Title>
          {[...Array(6)].map((_, index) => {
            return (
              <View key={index}>
                <CardSmall />
              </View>
            );
          })}
          <LinearGradient
            colors={[COLORS.darkBlue, COLORS.lightBlue]}
            style={styles.gradient}>
            <Text style={styles.advMain}>
              Хотите найти надёжного помощника?
            </Text>
            <Text style={styles.advDesc}>
              TopJob помогает быстро решать любые бытовые и бизнес-задачи.
            </Text>
            <Button style={styles.btn} textStyle={styles.btnText}>
              Создать задание
            </Button>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  scroll: {
    flex: 1,
    paddingHorizontal: 10,
  },
  textTitle: {
    fontSize: SIZES.lg,
    color: COLORS.black,
    fontFamily: FONTS.bold,
  },
  infoContainer: {
    marginTop: 16,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    color: COLORS.darkGrey,
    fontSize: SIZES.default,
    fontFamily: FONTS.medium,
  },
  salary: {
    color: COLORS.mainOrange,
    fontFamily: FONTS.bold,
    fontSize: SIZES.slg,
  },
  descContainer: {
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: COLORS.borderColor,
  },
  descTitle: {
    color: COLORS.black,
    fontSize: SIZES.md,
    fontFamily: FONTS.medium,
  },
  desc: {
    color: COLORS.black,
    marginTop: 10,
    fontSize: SIZES.md,
  },
  sliderContainer: {
    height: 300,
    backgroundColor: COLORS.darkGrey,
    marginBottom: 10,
    borderRadius: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  block: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 80,
    aspectRatio: 1,
    borderRadius: 40,
    marginRight: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.grey,
  },
  gradient: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  advMain: {
    color: COLORS.white,
    fontSize: SIZES.xlg,
    textAlign: 'center',
    fontFamily: FONTS.bold,
  },
  advDesc: {
    color: COLORS.white,
    fontSize: SIZES.default,
    textAlign: 'center',
    fontFamily: FONTS.light,
    marginVertical: 10,
  },
  btn: {
    width: width / 2,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
  btnText: {
    color: COLORS.black,
    fontSize: SIZES.default,
    fontFamily: FONTS.medium,
  },
});
