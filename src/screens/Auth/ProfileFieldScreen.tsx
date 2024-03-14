import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import Title from '../../components/Title/Title';
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/Button/Button';
import GroupInput from '../../components/GrooupInput/GroupInput';

const ProfileFieldScreen = ({navigation}: any) => {
  const [index, setIndex] = useState<number>(1);
  const [employer, setEmployer] = useState<boolean>(false);

  const handleRoleEmployer = () => {
    setIndex(1);
    setEmployer(true);
  };

  const handleRoleEmployee = () => {
    setIndex(2);
    setEmployer(false);
  };

  //get and set to users category work
  const handleVacancyCategory = () => {
    navigation.navigate('Category');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <HeaderLogo />
      <ScrollView style={styles.scroll}>
        <Title style={styles.titleContainer} textStyle={styles.title}>
          Заполните свои данные
        </Title>
        {/* User fields to update */}
        <AuthWrapper margin={16} label="Имя" placeholder="Ваше имя" />
        <AuthWrapper margin={16} label="Фамилия" placeholder="Ваше фамилия" />
        <AuthWrapper
          margin={16}
          label="Дата рождения"
          placeholder="Ваше дата"
        />
        <AuthWrapper margin={16} label="Город" placeholder="Ваше город" />

        {/* GET ROLE */}
        <View style={styles.roleContainer}>
          <View style={styles.checkBoxContainer}>
            <TouchableOpacity
              onPress={handleRoleEmployer}
              style={styles.checkBox}>
              {index === 1 && <View style={styles.circle} />}
            </TouchableOpacity>
            <Text>Я ищу работу</Text>
          </View>
          <View style={styles.checkBoxContainer}>
            <TouchableOpacity
              onPress={handleRoleEmployee}
              style={styles.checkBox}>
              {index === 2 && <View style={styles.circle} />}
            </TouchableOpacity>
            <Text>Я ищу сотрудника</Text>
          </View>
        </View>
        {/* if Employee */}
        {index === 2 && <Button style={styles.btnPhoto}>Выберите фото</Button>}
        {index === 1 && (
          <View style={styles.employer}>
            <GroupInput
              label="Категория"
              placeholder="Выберите категорию"
              category
              handleVacancyCategory={handleVacancyCategory}
              // vacancyCategory={vacancyCategory}
            />

            <Text style={[styles.blockTitle, {marginTop: 10}]}>О себе</Text>
            <View
              style={[
                styles.textArea,
                {height: 150, backgroundColor: COLORS.white},
              ]}>
              <TextInput
                style={styles.input}
                maxLength={120}
                multiline={true}
                placeholder={Platform.OS === 'ios' ? 'Введите навыки' : ''}
                // onChangeText={setVacancySkills}
              />
            </View>
            <Button style={styles.btnPhoto}>Выберите фото</Button>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileFieldScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scroll: {
    paddingHorizontal: 8,
  },
  title: {
    fontSize: SIZES.lg,
    fontFamily: FONTS.bold,
    color: COLORS.black,
  },
  titleContainer: {
    marginTop: 10,
  },
  inputs: {
    marginTop: 16,
  },
  roleContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    marginRight: 40,
  },
  checkBox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnPhoto: {
    width: 200,
    marginTop: 50,
    alignSelf: 'center',
  },
  circle: {
    width: 10,
    aspectRatio: 1,
    backgroundColor: COLORS.mainOrange,
    borderRadius: 5,
  },
  employer: {
    marginTop: 10,
  },
  blockTitle: {
    color: COLORS.black,
    fontSize: SIZES.default,
    fontFamily: FONTS.medium,
  },
  textArea: {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    height: 300,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
  input: {
    height: Platform.OS === 'ios' ? '100%' : null,
  },
});
