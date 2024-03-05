import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const CreateVacancy = () => {
  return (
    <TouchableOpacity>
      <Svg width="20" height="18" viewBox="0 0 20 18" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 15C18 15.551 17.551 16 17 16H15V6H17C17.551 6 18 6.449 18 7V15ZM1.99998 15V7C1.99998 6.449 2.44898 6 2.99998 6H4.99998V16H2.99998C2.44898 16 1.99998 15.551 1.99998 15ZM7.99998 2.49998C7.99998 2.22398 8.22398 1.99998 8.49998 1.99998H11.5C11.776 1.99998 12 2.22398 12 2.49998V3.99998H7.99998V2.49998ZM7.00002 16H13V6H7.00002V16ZM17 4H14V2.5C14 1.122 12.878 0 11.5 0H8.5C7.122 0 6 1.122 6 2.5V4H3C1.346 4 0 5.346 0 7V15C0 16.654 1.346 18 3 18H17C18.654 18 20 16.654 20 15V7C20 5.346 18.654 4 17 4Z"
          fill="#007AC2"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default CreateVacancy;

const styles = StyleSheet.create({});
