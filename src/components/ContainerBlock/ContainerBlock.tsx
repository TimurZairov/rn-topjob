import {StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';

interface IContainerBlock {
  children: ReactNode;
}

const ContainerBlock = ({children}: IContainerBlock) => {
  return <View style={styles.block}>{children}</View>;
};

export default ContainerBlock;

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#FBFBFD',
    padding: 10,
    height: 180,
  },
});
