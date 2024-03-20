import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
//
import Title from '../../components/Title/Title';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import Button from '../../components/Button/Button';
import RightArrowIcon from '../../assets/icons/RightArrowIcon';
import {useAppSelector} from '../../redux/type';

const pages = [
  {pageTitle: 'Мои вакансии', name: 'MyVacancy'},
  {pageTitle: 'Мои услуги', name: 'MyServices'},
  {pageTitle: 'Мои задачи', name: 'MyTasks'},
  {pageTitle: 'Сообщения', name: 'Messages'},
];

const DrawerScreen = (props: DrawerContentComponentProps) => {
  const {user} = useAppSelector(state => state.user);

  const {navigation} = props; // todo
  return (
    <SafeAreaView style={styles.safe}>
      <Title style={styles.title} textStyle={styles.titleText}>
        Мой профиль
      </Title>
      {user ? (
        <View style={styles.drawerNavigation}>
          {pages.map((page, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.page}
                activeOpacity={0.7}>
                <Text style={styles.pageTitle}>{page.pageTitle}</Text>
                <RightArrowIcon />
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
      <Button>{user ? 'Выйти' : 'Войти'}</Button>
    </SafeAreaView>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  titleText: {
    fontSize: SIZES.slg,
    fontFamily: FONTS.bold,
  },
  title: {
    marginVertical: 10,
  },
  drawerNavigation: {
    flex: 1,
  },
  page: {
    backgroundColor: COLORS.grey,
    marginVertical: 8,
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pageTitle: {
    fontSize: SIZES.md,
    fontFamily: FONTS.bold,
    color: COLORS.black,
  },
});
