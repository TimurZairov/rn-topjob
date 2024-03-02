import {StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction, useState} from 'react';
import {COLORS} from '../../theme/theme';
import DropDown_ICon from '../../assets/icons/DropDown_ICon';

const dropDownItems = [
  {post: 'vacancy', item: 'Вакансии'},
  {post: 'task', item: 'Задачи'},
  {post: 'service', item: 'Услуги'},
];

interface IDropDown {
  setCategory: Dispatch<SetStateAction<{post: string; item: string}>>;
  category: {post: string; item: string};
}

const DropDown = ({setCategory, category}: IDropDown) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <View style={styles.dropdown}>
        <Text>{category.item}</Text>
        <DropDown_ICon />
      </View>
      {isVisible && (
        <View>
          {dropDownItems.map((item, index) => {
            return <Text key={index}>{item.item}</Text>;
          })}
        </View>
      )}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: COLORS.white,
    width: '100%',
    height: 40,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
