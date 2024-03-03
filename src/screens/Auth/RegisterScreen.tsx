import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
//
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import Button from '../../components/Button/Button';

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <HeaderLogo />

      <ScrollView style={styles.scroll}>
        <Text style={styles.text}>Регистрация</Text>
        <View style={styles.wrapper}>
          <AuthWrapper label="E-mail" placeholder='"example@outlook.com"' />
          <AuthWrapper
            label="Пароль"
            placeholder='"введите ваш пароль"'
            margin={20}
          />
          <AuthWrapper
            label="Повторите пароль еще раз"
            placeholder='"введите ваш пароль"'
            margin={20}
          />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.agreement}>
            <Pressable>
              <View style={styles.checkbox} />
            </Pressable>

            <Text style={styles.textCheckbox}>
              Я даю согласие на обработку моих персональных данных
            </Text>
          </View>

          <View>
            <Text style={styles.desc}>
              Нажатием на кнопку{' '}
              <Text style={{color: COLORS.black}}>"Зарегистрироваться"</Text> я
              даю свое согласие на обработку персональных данных в соответствии
              с указанными{' '}
              <Text style={{color: COLORS.mainOrange}}>здесь </Text>
              условиями. Если вы отказываетесь от обработки персональных данных,
              не нажимайте кнопку "Зарегестрироваться".
            </Text>
            <Button style={styles.marginBtn}> Зарегестрироваться</Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  scroll: {
    paddingHorizontal: 12,
  },
  text: {
    color: COLORS.black,
    fontSize: SIZES.xlg,
    fontFamily: FONTS.bold,
    marginTop: 30,
  },
  wrapper: {
    backgroundColor: COLORS.grey,
    padding: 20,
    borderRadius: 16,
    marginTop: 16,
  },
  agreement: {
    flexDirection: 'row',
  },
  checkbox: {
    width: 17,
    height: 17,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    marginRight: 10,
  },
  textCheckbox: {
    marginBottom: 8,
    fontSize: SIZES.default,
    fontFamily: FONTS.medium,
  },
  desc: {
    color: COLORS.darkGrey,
    fontSize: SIZES.default,
    fontFamily: FONTS.light,
    lineHeight: 16,
  },
  marginBtn: {
    marginTop: 30,
  },
});
