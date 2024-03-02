import {Text, TextStyle, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';

interface ITitle {
  children: ReactNode;
  style: ViewStyle;
  textStyle: TextStyle;
}

const Title = ({children, style, textStyle}: ITitle) => {
  return (
    <View style={style}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
};

export default Title;
