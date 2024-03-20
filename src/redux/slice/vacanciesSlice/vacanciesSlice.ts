import {createSlice} from '@reduxjs/toolkit';
import {getVacancies, getVacancy} from '../../actions/vacanciesAction';
import {Vacancy} from '../../../types/type';

interface IInitialState {
  vacancies: Vacancy[];
  loading: boolean;
  error: unknown | string;
  vacancy: Vacancy | null;
}

const initialState: IInitialState = {
  vacancies: [],
  loading: false,
  error: null,
  vacancy: null,
};

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getVacancies.pending, state => {
      state.loading = true;
    });
    builder.addCase(getVacancies.fulfilled, (state, action) => {
      state.loading = false;
      state.vacancies = action.payload;
    });
    builder.addCase(getVacancies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getVacancy.pending, state => {
      state.loading = true;
    });
    builder.addCase(getVacancy.fulfilled, (state, action) => {
      state.loading = false;
      state.vacancy = action.payload;
    });
    builder.addCase(getVacancy.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {} = vacanciesSlice.actions;

export default vacanciesSlice.reducer;
