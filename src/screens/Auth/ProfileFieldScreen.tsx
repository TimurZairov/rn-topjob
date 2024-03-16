import {
  Image,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import storage from '@react-native-firebase/storage';
//
import HeaderLogo from '../../components/HeaderLogo/HeaderLogo';
import {COLORS, FONTS, SIZES} from '../../theme/theme';
import Title from '../../components/Title/Title';
import AuthWrapper from '../../components/AuthWrapper/AuthWrapper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/Button/Button';

import {AppContext} from '../../context/context';
import {useAppDispatch, useAppSelector} from '../../redux/type';
import {userInfoAction} from '../../redux/actions/userInfoAction';

const ProfileFieldScreen = ({navigation}: any) => {
  const [index, setIndex] = useState<number>(1);
  const [employer, setEmployer] = useState<boolean>(false);
  const [userLibraryImage, setUserLibraryImage] = useState<string | undefined>(
    undefined,
  );
  const [imageRef, setImageRef] = useState<string | undefined>('');

  //redux
  const dispatch = useAppDispatch();
  const {user, loading} = useAppSelector(state => state.user);

  //context
  const {
    name,
    lastName,
    phoneNumber,
    city,
    setName,
    setLastName,
    setPhoneNumber,
    setCity,
  } = useContext(AppContext);

  //userRole
  const handleRoleEmployer = () => {
    setIndex(1);
    setEmployer(true);
  };

  const handleRoleEmployee = () => {
    setIndex(2);
    setEmployer(false);
  };

  //get and set to users category work

  //userImage
  const handleLoadUserImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
        selectionLimit: 1,
      });

      if (result.didCancel) {
        return;
      }

      if (result.errorCode || result.errorMessage) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: result.errorMessage,
        });
      }
      if (result && result.assets) {
        setUserLibraryImage(result?.assets[0]?.uri);
        setImageRef(result?.assets[0]?.fileName);
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'что то пошло не так',
      });
    }
  };

  //permission
  const handleUserImage = async () => {
    if (Platform.OS === 'android') {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        {
          title: 'Разрешение на доступ к медиафайлам',
          message:
            'Мы нуждаемся в доступе к вашим медиафайлам для выполнения некоторых функций приложения.',
          buttonPositive: 'Разрешить',
          buttonNegative: 'Отмена',
        },
      );

      if (permission === PermissionsAndroid.RESULTS.GRANTED) {
        handleLoadUserImage();
      } else {
        console.log('not');
      }
    } else {
      await handleLoadUserImage();
    }
  };

  //update user info
  const handleUpdateUserInfo = async () => {
    if (loading) {
      return;
    }
    try {
      //upload image to firestore storage
      const reference = storage().ref(`/images/${imageRef}`); //ref name
      await reference.putFile(userLibraryImage!); //path to image
      const url = await reference.getDownloadURL(); //get url from storage
      //info for update
      const userInfo = {
        name,
        lastName,
        city,
        phoneNumber,
        employer,
        image: url,
        id: user?._id,
      };

      await dispatch(userInfoAction(userInfo));
      navigation.replace('Tab', {screen: 'Vacancy'});
      //reset
      setName('');
      setLastName('');
      setPhoneNumber('');
      setCity('');
      setIndex(1);
      setEmployer(false);
      setUserLibraryImage(undefined);
      setImageRef(undefined);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.safe}>
      <HeaderLogo />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Title style={styles.titleContainer} textStyle={styles.title}>
          Заполните свои данные
        </Title>
        {/* User fields to update */}
        <AuthWrapper
          setState={setName}
          margin={16}
          label="Имя"
          placeholder="Ваше имя"
        />
        <AuthWrapper
          setState={setLastName}
          margin={16}
          label="Фамилия"
          placeholder="Ваше фамилия"
        />
        <AuthWrapper
          margin={16}
          setState={setPhoneNumber}
          label="Номер "
          placeholder="Ваше номер телефона"
        />

        <AuthWrapper
          setState={setCity}
          margin={16}
          label="Город"
          placeholder="Ваше город"
        />

        {/* GET ROLE */}
        <View style={styles.roleContainer}>
          <View style={styles.checkBoxContainer}>
            <TouchableOpacity
              onPress={handleRoleEmployer}
              style={styles.checkBox}>
              {index === 1 && <View style={styles.circle} />}
            </TouchableOpacity>
            <Text>Я ищу работу</Text>
          </View>
          <View style={styles.checkBoxContainer}>
            <TouchableOpacity
              onPress={handleRoleEmployee}
              style={styles.checkBox}>
              {index === 2 && <View style={styles.circle} />}
            </TouchableOpacity>
            <Text>Я ищу сотрудника</Text>
          </View>
        </View>
        {/* Image */}
        <>
          {userLibraryImage && (
            <Image source={{uri: userLibraryImage}} style={styles.image} />
          )}
          <Button
            onPress={
              userLibraryImage === undefined
                ? handleUserImage
                : handleUpdateUserInfo
            }
            style={styles.btnPhoto}>
            {userLibraryImage === undefined ? 'Выберите фото' : 'Сохранить'}
          </Button>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileFieldScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scroll: {
    paddingHorizontal: 8,
  },
  title: {
    fontSize: SIZES.lg,
    fontFamily: FONTS.bold,
    color: COLORS.black,
  },
  titleContainer: {
    marginTop: 10,
  },
  inputs: {
    marginTop: 16,
  },
  roleContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    marginRight: 40,
  },
  checkBox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  btnPhoto: {
    width: 200,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: COLORS.darkBlue,
  },
  circle: {
    width: 10,
    aspectRatio: 1,
    backgroundColor: COLORS.mainOrange,
    borderRadius: 5,
  },
  employer: {
    marginTop: 10,
    marginBottom: 20,
  },
  blockTitle: {
    color: COLORS.black,
    fontSize: SIZES.default,
    fontFamily: FONTS.medium,
  },
  textArea: {
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    height: 300,
    marginTop: 10,
    borderRadius: 5,
    padding: 10,
  },
  input: {
    height: Platform.OS === 'ios' ? '100%' : null,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

// const userSchema = new mongoose.Schema(
//   {
//     email:
//     password:
//     name:
//     lastName:
//     phoneNumber:
//     image:
//     employer:
//     category:
//     city:
//     about
//   },

// );
