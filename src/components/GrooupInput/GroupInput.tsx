import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTS, SIZES} from '../../theme/theme';
import Input from '../Input/Input';
import Button from '../Button/Button';

interface IGroupInput {
  label: string;
  placeholder: string;
  mapBtn?: boolean;
  handleWorkLocation?: () => void;
}

const GroupInput = ({
  label,
  placeholder,
  mapBtn,
  handleWorkLocation,
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
        />
        {mapBtn && (
          <Button onPress={handleWorkLocation} style={{width: 100}}>
            Карта
          </Button>
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
});
