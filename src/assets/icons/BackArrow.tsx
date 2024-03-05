import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

const BackArrow = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
      <Svg width="20" height="18" viewBox="0 0 20 18" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.75 7.75001H3.91875L8.46 2.30001C8.9025 1.77001 8.83 0.981258 8.3 0.540008C7.76875 0.0975084 6.98125 0.170008 6.54 0.700008L0.29 8.20001C0.24125 8.25876 0.21625 8.32751 0.18 8.39251C0.15 8.44501 0.11375 8.49001 0.09125 8.54751C0.035 8.69126 0.00125 8.84251 0.00125 8.99501C0.00125 8.99626 0 8.99876 0 9.00001C0 9.00126 0.00125 9.00376 0.00125 9.00501C0.00125 9.15751 0.035 9.30876 0.09125 9.45251C0.11375 9.51001 0.15 9.55501 0.18 9.60751C0.21625 9.67251 0.24125 9.74126 0.29 9.80001L6.54 17.3C6.7875 17.5963 7.1425 17.75 7.5 17.75C7.7825 17.75 8.06625 17.655 8.3 17.46C8.83 17.0188 8.9025 16.23 8.46 15.7L3.91875 10.25H18.75C19.44 10.25 20 9.69001 20 9.00001C20 8.31001 19.44 7.75001 18.75 7.75001Z"
          fill="#333333"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default BackArrow;
