import {createAsyncThunk} from '@reduxjs/toolkit';
import {User} from '../../types/type';
import axios, {AxiosError} from 'axios';
import {BASE_URL} from '../../config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginAction = createAsyncThunk(
  'user/login',
  async (userData: Pick<User, 'email' | 'password'>, {rejectWithValue}) => {
    try {
      const result = await axios.post(`${BASE_URL}/auth/login`, userData);
      if (!result) {
        return rejectWithValue({
          errorMessage: 'Такого пользователя не существует',
        });
      }

      //save token
      await AsyncStorage.setItem('@token', result?.data?.token);

      return result.data.user as User;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        //return error with axios status
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.status === 400) {
          return rejectWithValue('Не верный логин или пароль');
        }
      }
      throw error;
    }
  },
);
