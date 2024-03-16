import {createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosError} from 'axios';
import {BASE_URL} from '../../config/config';
import Toast from 'react-native-toast-message';

export const userInfoAction = createAsyncThunk(
  'user/fillInfo',
  async (userInfo: any, {rejectWithValue}) => {
    try {
      const result = await axios.post(`${BASE_URL}/auth/update`, {userInfo});
      if (!result) {
        Toast.show({
          type: 'error',
          text1: 'Ошибка',
          text2: 'Ошибка сервера, попробуйте снова',
        });
      }
      return result.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.status === 500) {
          rejectWithValue('Ошибка сервера');
        }
      }
    }
  },
);
