import {View} from 'react-native';
import React from 'react';
import Title from '../Title/Title';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import {workCategory} from '../../data/workCategory';
import Button from '../Button/Button';

const TopVacancies = () => {
  return (
    <View>
      <Title
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 16,
        }}
        textStyle={{fontFamily: FONTS.bold, fontSize: SIZES.slg}}>
        Популярные вакансии
      </Title>
      {workCategory.map((work, index) => {
        return (
          <Button
            key={index}
            style={{backgroundColor: COLORS.grey, marginBottom: 8}}
            textStyle={{color: COLORS.black}}>
            {work}
          </Button>
        );
      })}
    </View>
  );
};

export default TopVacancies;
