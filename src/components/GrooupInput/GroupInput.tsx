import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {FONTS, SIZES} from '../../theme/theme';
import Input from '../Input/Input';
import Button from '../Button/Button';
import RightArrowIcon from '../../assets/icons/RightArrowIcon';

interface IGroupInput {
  label: string;
  placeholder: string;
  mapBtn?: boolean;
  handleWorkLocation?: () => void;
  setState?: Dispatch<SetStateAction<string>>;
  category?: boolean;
  handleVacancyCategory?: () => void;
}

const GroupInput = ({
  label,
  placeholder,
  mapBtn,
  handleWorkLocation,
  setState,
  category,
  handleVacancyCategory,
}: IGroupInput) => {
  return (
    <View style={styles.inputs}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 4,
          alignItems: 'center',
        }}>
        <Input
          style={{width: mapBtn ? '68%' : '100%'}}
          placeholder={placeholder}
          setState={setState}
        />
        {mapBtn && (
          <Button onPress={handleWorkLocation} style={{width: 100}}>
            Карта
          </Button>
        )}
        {category && (
          <TouchableOpacity
            style={styles.arrow}
            activeOpacity={0.7}
            onPress={handleVacancyCategory}>
            <RightArrowIcon />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default GroupInput;

const styles = StyleSheet.create({
  inputs: {
    marginTop: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: SIZES.default,
    fontFamily: FONTS.medium,
  },
  arrow: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'flex-end',
  },
});
