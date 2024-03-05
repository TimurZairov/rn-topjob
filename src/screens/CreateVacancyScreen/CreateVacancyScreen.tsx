import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import {COLORS, FONTS, SIZES, width} from '../../theme/theme';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import GroupInput from '../../components/GrooupInput/GroupInput';
import {TextInput} from 'react-native-gesture-handler';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import CheckIcon from '../../assets/icons/CheckIcon';

const CreateVacancyScreen = () => {
  const condition = [
    'Полная занятость',
    'Частичная занятость',
    'Волонтерство',
    'Стажировка',
    'Проектная работа',
  ];

  const mode = [
    'Работать только по сб и вс',
    'Можно работать сменами по 4-6 часов в день',
    'Можно работать после 16:00',
    'Свободный',
    'Гибкий',
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <HeaderLogo isVisible />
      <ScrollView style={styles.scroll}>
        <View style={{paddingBottom: 200}}>
          <ScreenTitle>Создание вакансии</ScreenTitle>
          {/* Main info */}
          <View style={styles.mainInfoContainer}>
            <Text style={styles.main}>Основная информация</Text>
            <GroupInput
              label="Название услуги"
              placeholder="Введите название"
            />
            <GroupInput label="Категория" placeholder="Выберите категорию" />
          </View>
          <View style={styles.mainInfoContainer}>
            <Text style={styles.main}>Место выполнения услуги</Text>
            <GroupInput
              label="Вакансия в городе"
              placeholder="Введите название"
            />
            <GroupInput
              label="Адрес офиса (не обязательно)"
              placeholder="Укажите адресс"
            />
          </View>
          <Text style={styles.desc}>Описание</Text>
          <View style={styles.textArea}>
            <TextInput style={styles.input} maxLength={120} multiline={true} />
          </View>
          {/*  */}
          <View style={styles.mainInfoContainer}>
            <Text style={styles.blockTitle}>Предлагаемая зарплата</Text>
            <Input placeholder="от" style={{marginTop: 10}} />
            <Input placeholder="до" style={{marginTop: 5}} />
            <Text style={[styles.blockTitle, {marginTop: 10}]}>
              Ключевые навыки
            </Text>
            <View
              style={[
                styles.textArea,
                {height: 150, backgroundColor: COLORS.white},
              ]}>
              <TextInput
                style={styles.input}
                maxLength={120}
                multiline={true}
                placeholder="Введите навыки"
              />
            </View>
            <Text style={styles.condition}>
              Укажите главные качества или навыки владения программами, которыми
              долже обладать кандидат
            </Text>

            <Text style={[styles.blockTitle, {marginTop: 10}]}>
              Кратоке описание компании
            </Text>
            <View
              style={[
                styles.textArea,
                {height: 150, backgroundColor: COLORS.white},
              ]}>
              <TextInput
                style={styles.input}
                maxLength={120}
                multiline={true}
                placeholder="Введите описание"
              />
            </View>
            <Text style={styles.condition}>
              Используйте только при публикации анонимных вакансий
            </Text>
          </View>
          {/*  */}
          <View style={styles.mainInfoContainer}>
            <Text style={[styles.main, {marginBottom: 20}]}>Тип занятости</Text>
            {condition.map((item, index) => {
              return (
                <View key={index} style={styles.checkBoxContainer}>
                  <View style={styles.ratio}>
                    <View style={styles.checked} />
                  </View>
                  <Text>{item}</Text>
                </View>
              );
            })}
          </View>

          <View style={styles.mainInfoContainer}>
            <Text style={[styles.main, {marginBottom: 20}]}>Режим работы</Text>
            {mode.map((item, index) => {
              return (
                <View key={index} style={styles.checkBoxContainer}>
                  <View style={styles.checkBox}>
                    <View style={styles.active}>
                      <CheckIcon />
                    </View>
                  </View>
                  <Text>{item}</Text>
                </View>
              );
            })}
          </View>
          <Button
            style={{width: width / 2, alignSelf: 'center', marginTop: 16}}>
            Создать вакансию
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateVacancyScreen;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: COLORS.white,
  },
  scroll: {
    paddingHorizontal: 12,
  },
  mainInfoContainer: {
    padding: 16,
    backgroundColor: COLORS.grey,
    marginTop: 26,
    borderRadius: 6,
  },
  main: {
    fontSize: SIZES.slg,
    fontFamily: FONTS.medium,
    color: COLORS.black,
  },
  textArea: {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    height: 300,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
  desc: {
    color: COLORS.black,
    fontSize: SIZES.default,
    fontFamily: FONTS.medium,
    marginTop: 16,
  },
  input: {
    width: '100%',
    height: '100%',
  },
  blockTitle: {
    color: COLORS.black,
    fontSize: SIZES.default,
    fontFamily: FONTS.medium,
  },
  condition: {
    color: COLORS.darkGrey,
    fontSize: SIZES.s,
    fontFamily: FONTS.light,
    marginTop: 6,
  },
  ratio: {
    width: 18,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    marginRight: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checked: {
    borderWidth: 5,
    width: 10,
    aspectRatio: 1,
    borderRadius: 100,
    borderColor: COLORS.green,
  },
  checkBox: {
    width: 18,
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    marginRight: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  active: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
