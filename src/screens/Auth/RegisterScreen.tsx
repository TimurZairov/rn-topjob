import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
//
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import Button from '../../components/Button/Button';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import {registrationUser} from '../../redux/actions/registrationAction';
import {useAppDispatch, useAppSelector} from '../../redux/type';
import Toast from 'react-native-toast-message';
import {AxiosError} from 'axios';
import CheckIcon from '../../assets/icons/CheckIcon';
import {registration} from '../../helpers/registration';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationParamsProps} from '../../navigation/types/types';
import {User} from '../../types/type';

interface IState {
  loading: boolean;
  error: AxiosError | null | unknown;
  user: User | null;
}

const RegisterScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  //
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationParamsProps>();
  const {loading, error, user} = useAppSelector<IState>(state => state.user);

  const handleApplyAgreement = () => {
    setChecked(prev => !prev);
  };

  //validation all inputs
  const handleNewUserRegistration = async () => {
    if (loading) {
      return;
    }
    const userData = {
      email: email.toLowerCase(),
      password,
    };
    //validation helpers
    const checkFields = registration({email, password, confirm, checked});

    if (!checkFields) {
      return;
    }

    //registration action
    await dispatch(registrationUser(userData));
    if (user) {
      navigation.replace('Tab', {screen: 'Profile'});
    }
  };

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Ошибка',
        text2: `${error}`,
      });
    }
  }, [error]);

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
            <Pressable hitSlop={10} onPress={handleApplyAgreement}>
              <View style={styles.checkbox}>
                {checked && (
                  <View style={styles.checkBoxActive}>
                    <CheckIcon />
                  </View>
                )}
              </View>
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
              loading={loading}
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
    borderRadius: 4,
    overflow: 'hidden',
  },
  checkBoxActive: {
    backgroundColor: COLORS.green,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
