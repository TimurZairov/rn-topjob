import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
//
import {COLORS, width} from '../../theme/theme';
import Button from '../../components/Button/Button';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={styles.enter}>
          Войдите под своим логином и паролем или зарегистрируйтесь
        </Text>
        <Button style={styles.btn}>Войти</Button>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 50,
    aspectRatio: 1,
  },
  enter: {
    color: COLORS.black,
    textAlign: 'center',
  },
  btn: {
    width: width / 2,
    alignSelf: 'center',
    marginVertical: 16,
  },
});
