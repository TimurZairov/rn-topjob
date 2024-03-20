import {StyleSheet, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';

interface IContainerBlock {
  children: ReactNode;
  style?: ViewStyle;
}

const ContainerBlock = ({children, style}: IContainerBlock) => {
  return <View style={[styles.block, style]}>{children}</View>;
};

export default ContainerBlock;

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#FBFBFD',
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
});
