import {createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosError} from 'axios';
import {BASE_URL} from '../../config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IUserData {
  email: string;
  password: string;
}
//userRegistration
export const registrationUser = createAsyncThunk(
  'register/user',

  async (userData: IUserData, {rejectWithValue}) => {
    try {
      let result = await axios.post(`${BASE_URL}/auth/register`, userData);
      if (!result) {
        return rejectWithValue({errorMessage: 'Что то пошло не так'});
      }
      await AsyncStorage.setItem('@token', result.data.token);
      return result.data.user;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        //return error with axios status
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.status === 400) {
          return rejectWithValue({errorMessage: 'Пользователь уже существует'});
        }
      }
      throw error;
    }
  },
);