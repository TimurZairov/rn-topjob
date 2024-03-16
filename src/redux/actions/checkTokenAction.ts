import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';
//

export const checkTokenAction = createAsyncThunk(
  'user/token',
  async (_, {rejectWithValue}) => {
    try {
      const token = await AsyncStorage.getItem('@token');

      if (!token) {
        return null;
      }
      return token;
    } catch (error) {
      return rejectWithValue(null);
    }
  },
);
