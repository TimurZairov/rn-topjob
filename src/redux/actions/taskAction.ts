import {createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosError} from 'axios';
import {BASE_URL} from '../../config/config';
import {Task} from '../../types/type';
import Toast from 'react-native-toast-message';

export const getTasks = createAsyncThunk(
  'tasks/get',
  async (_, {rejectWithValue}) => {
    try {
      const result = await axios.get(`${BASE_URL}/task`);
      return result.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.status === 400) {
          return rejectWithValue('Ошибка сервера');
        }
      }
    }
  },
);

export const createTask = createAsyncThunk(
  'task/create',
  async (taskData: Task, {rejectWithValue, dispatch}) => {
    try {
      const res = await axios.post(`${BASE_URL}/task`, {taskData});
      console.log(res);
      if (res.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Успешно',
          text2: 'Задача успешно создана',
        });
        dispatch(getTasks());
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.status === 400) {
          return rejectWithValue('Ошибка сервера');
        }
      }
    }
  },
);
