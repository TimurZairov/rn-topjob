import {launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';

export const getImages = async () => {
  console.log('ok');
  try {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 4,
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

    if (result.assets) {
      return result?.assets;
    }
  } catch (error) {
    console.log(error);
  }
};
