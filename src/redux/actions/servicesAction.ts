import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../../config/config';
import Toast from 'react-native-toast-message';
import {Service} from '../../types/type';
//get all services
export const getServices = createAsyncThunk(
  'services/get',
  async (_, {rejectWithValue}) => {
    try {
      const services = await axios.get(`${BASE_URL}/service`);
      return services.data;
    } catch (error) {
      rejectWithValue('Ошибка');
      console.log(error);
    }
  },
);
//create service
export const createService = createAsyncThunk(
  'service/create',
  async (serviceData: Service, {rejectWithValue, dispatch}) => {
    try {
      const res = await axios.post(`${BASE_URL}/service`, {serviceData});
      if (!res) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'Ошибка при создании услуги',
        });
        return null;
      }
      if (res.status === 200) {
        Toast.show({
          type: 'success',
          text1: 'Успешно',
          text2: 'Услуга созадана',
        });
        dispatch(getServices());
      }
    } catch (error) {
      rejectWithValue('Ошибка при создании услуги');
    }
  },
);
