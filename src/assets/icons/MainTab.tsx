import {View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface IMainTab {
  color?: string;
}

const MainTab = ({color}: IMainTab) => {
  return (
    <View>
      <Svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.1552 23.3334H18.6669V15.1667C18.6669 14.5215 18.1442 14 17.5002 14H10.5002C9.85508 14 9.33358 14.5215 9.33358 15.1667V23.3334H5.83358L5.84058 13.5135L13.9979 5.17071L22.1669 13.5614L22.1552 23.3334ZM11.6669 23.3334H16.3336V16.3334H11.6669V23.3334ZM23.8282 11.8825L14.8344 2.68453C14.3946 2.23536 13.6059 2.23536 13.1661 2.68453L4.17108 11.8837C3.74524 12.3212 3.50024 12.9325 3.50024 13.5614V23.3334C3.50024 24.6202 4.48841 25.6667 5.70291 25.6667H10.5002H17.5002H22.2964C23.5109 25.6667 24.5002 24.6202 24.5002 23.3334V13.5614C24.5002 12.9325 24.2552 12.3212 23.8282 11.8825Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default MainTab;
