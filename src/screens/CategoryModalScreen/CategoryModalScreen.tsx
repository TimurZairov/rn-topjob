import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
//
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import {category} from '../../data/workCategory';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import Title from '../../components/Title/Title';
import {AppContext} from '../../context/context';

const CategoryModalScreen = ({navigation}: any) => {
  const {setVacancyCategory} = useContext(AppContext);
  const [categoryIndex, setCategoryIndex] = useState<number | null>(null);

  const handleSaveCategory = (item: string, index: number) => {
    setCategoryIndex(index);
    setVacancyCategory(item);
    setTimeout(() => {
      navigation.goBack();
    }, 500);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <HeaderLogo />
      <Title textStyle={styles.titleText} style={styles.title}>
        Выберите услугу
      </Title>
      <ScrollView style={styles.scroll}>
        {category.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.category,
                {
                  backgroundColor:
                    index === categoryIndex ? COLORS.mainOrange : COLORS.grey,
                },
              ]}
              onPress={() => handleSaveCategory(item, index)}>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      index === categoryIndex ? COLORS.white : COLORS.black,
                  },
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryModalScreen;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  title: {
    marginLeft: 12,
    marginVertical: 16,
  },
  titleText: {
    fontSize: SIZES.xlg,
    fontFamily: FONTS.bold,
    color: COLORS.black,
  },
  scroll: {
    paddingHorizontal: 12,
  },
  category: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 8,
    alignSelf: 'baseline',
    borderRadius: 6,
  },
  text: {
    color: COLORS.black,
    fontSize: SIZES.default,
    fontFamily: FONTS.medium,
  },
});
