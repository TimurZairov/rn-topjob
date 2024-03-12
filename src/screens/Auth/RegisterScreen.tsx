import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
//
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import Button from '../../components/Button/Button';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import {registrationUser} from '../../redux/actions/registrationAction';
import {useAppDispatch} from '../../redux/type';

const RegisterScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const emailValidation = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  //
  const dispatch = useAppDispatch();

  const handleNewUserRegistration = () => {
    const user = {
      email: email.toLowerCase(),
      password,
    };
    //email validation check
    if (emailValidation.test(email) === false) {
      console.warn('not');
      return;
    }
    //fill all fields check
    if (
      confirm.trim() === '' ||
      password.trim() === '' ||
      email.trim() === ''
    ) {
      console.warn('fill the fields');
      return;
    }

    //confirm password check
    if (confirm !== password) {
      console.warn('cont confirmed');
      return;
    }

    //registration action
    dispatch(registrationUser(user));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <HeaderLogo isVisible />

      <ScrollView style={styles.scroll}>
        <ScreenTitle>Регистрация</ScreenTitle>
        <View style={styles.wrapper}>
          <AuthWrapper
            setState={setEmail}
            label="E-mail"
            placeholder='"example@outlook.com"'
          />
          <AuthWrapper
            setState={setPassword}
            label="Пароль"
            placeholder='"введите ваш пароль"'
            margin={20}
          />
          <AuthWrapper
            setState={setConfirm}
            label="Повторите пароль еще раз"
            placeholder='"еще раз пароль"'
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
            <Button
              onPress={handleNewUserRegistration}
              style={styles.marginBtn}>
              Зарегестрироваться
            </Button>
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
