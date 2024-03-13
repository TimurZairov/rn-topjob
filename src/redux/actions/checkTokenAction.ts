import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
//
import {BASE_URL} from '../../config/config';
import {User} from '../../types/type';

export const checkTokenAction = createAsyncThunk(
  'check/token',
  async (_, {rejectWithValue}) => {
    try {
      const token = await AsyncStorage.getItem('@token');

      if (!token) {
        return null;
      }
      const isAuth = await axios.post(`${BASE_URL}/auth`, {token});

      if (!isAuth) {
        return null;
      }
      return isAuth.data as User;
    } catch (error) {
      return rejectWithValue(null);
    }
  },
);
