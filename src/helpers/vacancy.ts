import Toast from 'react-native-toast-message';

export const vacancyCheckValidation = (data: any) => {
  //check all values of data
  const keys = Object.keys(data);
  const checked = keys.map(item => {
    if (String(data[item]).trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'Ошибка',
        text2: 'Заполните все поля',
      });
      return false;
    }
    return true;
  });
  return !checked.includes(false);
};
