import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../../config/config';
//

export const checkTokenAction = createAsyncThunk(
  'user/token',
  async (_, {rejectWithValue}) => {
    try {
      const token = await AsyncStorage.getItem('@token');

      if (!token) {
        return null;
      }
      const isUser = await axios.post(`${BASE_URL}/auth/registered`, {
        headers: {
          Authorization: `Bearer ${token}`, // Предполагая, что у вас есть переменная token с JWT токеном
        },
      });
      return isUser.data;
    } catch (error) {
      return rejectWithValue(null);
    }
  },
);
