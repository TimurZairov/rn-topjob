import {View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const CheckIcon = () => {
  return (
    <View>
      <Svg width="12" height="8" viewBox="0 0 12 8" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.57543 8.00003C4.39143 8.00003 4.21543 7.92403 4.08943 7.79003L0.847425 4.33737C0.594759 4.06937 0.608759 3.64737 0.876759 3.39537C1.14543 3.14337 1.56743 3.1567 1.81876 3.4247L4.56876 6.35203L10.1741 0.217368C10.4234 -0.0552989 10.8448 -0.0732988 11.1168 0.174701C11.3881 0.422701 11.4068 0.844701 11.1588 1.11603L5.06743 7.7827C4.94276 7.92003 4.76543 7.9987 4.58009 8.00003H4.57543Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

export default CheckIcon;
