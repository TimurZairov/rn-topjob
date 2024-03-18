import {Asset} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import storage from '@react-native-firebase/storage';
//create service upload images to firebase
export const uploadImages = async (images: Asset[] | null) => {
  const uri = images?.map(image => {
    return {
      name: image.fileName,
      uri: image.uri,
    };
  });

  try {
    const imagesUrl: any = await Promise.all<string[]>(
      uri?.map(item => {
        if (item === null || item === undefined) {
          return;
        }
        return getUrl(item.name, item.uri);
      }),
    );
    return imagesUrl;
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Ошибка',
      text2: 'Ошибка при загруки фото',
    });
  }
};

const getUrl = async (name: string, uri: string): Promise<string> => {
  const reference = storage().ref(`/service/${name}`); //ref name
  await reference.putFile(uri!); //path to image
  const url = await reference.getDownloadURL(); //get url from storage
  return url;
};
