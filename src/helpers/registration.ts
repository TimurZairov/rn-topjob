import Toast from 'react-native-toast-message';

type IRegistration = {
  email: string;
  password: string;
  confirm: string;
  checked: boolean;
};

export const registration = (data: IRegistration) => {
  const {email, password, confirm, checked} = data;
  const emailValidation = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  //check email validation
  if (emailValidation.test(email) === false) {
    Toast.show({
      type: 'error',
      text1: 'Ошибка',
      text2: 'Введите почту',
    });
    return false;
  }
  //password length validation
  if (password.length < 6) {
    Toast.show({
      type: 'error',
      text1: 'Ошибка',
      text2: 'Пароль должен быть более 6 символов',
    });
    return false;
  }

  //fill all fields check
  if (confirm.trim() === '' || password.trim() === '' || email.trim() === '') {
    Toast.show({
      type: 'error',
      text1: 'Ошибка',
      text2: 'Заполните все поля',
    });
    return false;
  }

  //confirm password check
  if (confirm !== password) {
    Toast.show({
      type: 'error',
      text1: 'Ошибка',
      text2: 'Пароль должен совпадать',
    });
    return false;
  }

  if (!checked) {
    Toast.show({
      type: 'error',
      text1: 'Ошибка',
      text2: 'Примите соглашение',
    });
    return false;
  }

  return true;
};
