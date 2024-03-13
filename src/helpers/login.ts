import Toast from 'react-native-toast-message';

type Data = {
  email: string;
  password: string;
};

export const login = (data: Data) => {
  const {email, password} = data;
  const emailValidation = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  //check email
  if (emailValidation.test(email) === false || email.trim() === '') {
    Toast.show({
      type: 'error',
      text1: 'Ошибка',
      text2: 'Введите почту',
    });
    return false;
  }
  //check password
  if (password.trim() === '') {
    Toast.show({
      type: 'error',
      text1: 'Ошибка',
      text2: 'Введите пароль',
    });
    return false;
  }
  return true;
};
