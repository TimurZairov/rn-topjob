import {createAsyncThunk} from '@reduxjs/toolkit';
import axios, {AxiosError} from 'axios';
import {BASE_URL} from '../../config/config';
import {Vacancy} from '../../types/type';
import Toast from 'react-native-toast-message';

//get all Vacancies
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
//create new Vacancy
export const createVacancy = createAsyncThunk(
  'vacancy/create',
  async (vacancyData: Vacancy, {rejectWithValue, dispatch}) => {
    try {
      const result = await axios.post(`${BASE_URL}/vacancies`, {vacancyData});
      if (result.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Успешно',
          text2: 'Вакансия создана',
        });
        dispatch(getVacancies());
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.status === 500) {
          rejectWithValue('Что-то пошло не так...');
        }
      }
    }
  },
);
