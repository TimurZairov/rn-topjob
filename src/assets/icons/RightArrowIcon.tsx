import {View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const RightArrowIcon = () => {
  return (
    <View>
      <Svg width="7" height="14" viewBox="0 0 7 14" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.99998 7C6.99998 7.228 6.92298 7.455 6.76798 7.64L1.76798 13.64C1.41498 14.064 0.783984 14.122 0.359984 13.768C-0.0640163 13.415 -0.121016 12.785 0.231984 12.36L4.70798 6.989L0.392983 1.627C0.0469832 1.197 0.114983 0.566999 0.544983 0.221C0.974983 -0.125 1.60398 -0.0570012 1.95098 0.372999L6.77898 6.373C6.92598 6.556 6.99998 6.778 6.99998 7Z"
          fill="#BDC0C6"
        />
      </Svg>
    </View>
  );
};

export default RightArrowIcon;
