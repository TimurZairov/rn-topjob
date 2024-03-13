import {Image, StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {COLORS} from '../../theme/theme';
import {useAppDispatch, useAppSelector} from '../../redux/type';
import {checkTokenAction} from '../../redux/actions/checkTokenAction';

const SplashScreen = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(state => state.user);

  //if token not expired check user
  const isAuth = useCallback(async () => {
    dispatch(checkTokenAction());
  }, [dispatch]);

  //check token
  useEffect(() => {
    isAuth();
    if (!loading) {
      navigation.replace('Tab');
    }
  }, [isAuth, navigation, loading]);

  return (
    <View style={styles.splash}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../../assets/images/mainLogo.png')}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  logo: {
    width: 150,
    height: 150,
  },
});
