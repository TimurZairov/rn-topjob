import {View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const ProfileIcon = () => {
  return (
    <View>
      <Svg width="26" height="30" viewBox="0 0 26 30" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.5 7C16.5 5.06975 14.9303 3.5 13 3.5C11.0697 3.5 9.5 5.06975 9.5 7C9.5 8.93025 11.0697 10.5 13 10.5C14.9303 10.5 16.5 8.93025 16.5 7ZM20 7C20 10.8605 16.8605 14 13 14C9.1395 14 6 10.8605 6 7C6 3.1395 9.1395 0 13 0C16.8605 0 20 3.1395 20 7ZM0.75 28C0.75 21.245 6.24675 15.75 13 15.75C19.7533 15.75 25.25 21.245 25.25 28C25.25 28.966 24.4678 29.75 23.5 29.75C22.5322 29.75 21.75 28.966 21.75 28C21.75 23.1753 17.8247 19.25 13 19.25C8.17525 19.25 4.25 23.1753 4.25 28C4.25 28.966 3.46775 29.75 2.5 29.75C1.53225 29.75 0.75 28.966 0.75 28Z"
          fill="#BDC0C6"
        />
      </Svg>
    </View>
  );
};

export default ProfileIcon;
