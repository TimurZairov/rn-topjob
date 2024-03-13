import {StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';
import {COLORS} from '../../theme/theme';

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
  },
});
