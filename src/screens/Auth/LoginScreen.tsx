import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
//
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import Button from '../../components/Button/Button';
import {StackNavigationParamsProps} from '../../navigation/types/types';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import {useAppDispatch, useAppSelector} from '../../redux/type';
import {loginAction} from '../../redux/actions/loginAction';
import {login} from '../../helpers/login';

interface ILoginScreen {
  navigation: StackNavigationParamsProps;
}

const LoginScreen = ({navigation}: ILoginScreen) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const {loading, user} = useAppSelector(state => state.user);

  const handleRegisterScreen = async () => {
    navigation.navigate('Register');
  };
  //login user
  const handleUserLogin = async () => {
    if (loading) {
      return;
    }
    const userData = {
      email: email.toLowerCase(),
      password: password.toLowerCase(),
    };
    //check user data validation helper
    const isValid = login(userData);
    if (!isValid) {
      return;
    }
    //login user
    await dispatch(loginAction(userData));

    navigation.goBack();
    setEmail('');
    setPassword('');
  };

  console.log(user);

  return (
    <SafeAreaView style={styles.safe}>
      <HeaderLogo isVisible />

      <ScrollView style={styles.scroll}>
        <ScreenTitle>Войти</ScreenTitle>
        <View style={styles.wrapper}>
          <AuthWrapper
            label="E-mail"
            placeholder='"example@outlook.com"'
            setState={setEmail}
          />
          <AuthWrapper
            label="Пароль"
            placeholder='"введите ваш пароль"'
            margin={20}
            setState={setPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.wrapper}>
          <Button loading={loading} onPress={handleUserLogin}>
            Войти
          </Button>
          <Text style={styles.desc}>или</Text>
          <Text
            onPress={handleRegisterScreen}
            style={{
              color: COLORS.black,
              fontSize: SIZES.md,
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}>
            Зарегистрироваться
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
    marginTop: 20,
    textAlign: 'center',
  },
});
