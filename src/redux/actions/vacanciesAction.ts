import {createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosError} from 'axios';
import {BASE_URL} from '../../config/config';
import {Vacancy} from '../../types/type';

export const getVacancies = createAsyncThunk<Vacancy[]>(
  'vacancies/get',
  async (_, {rejectWithValue}) => {
    try {
      const vacancies = await axios.get(`${BASE_URL}/vacancies`);
      return vacancies.data;
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
