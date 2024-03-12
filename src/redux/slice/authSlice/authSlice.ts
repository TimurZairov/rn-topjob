import {createSlice} from '@reduxjs/toolkit';
import {registrationUser} from '../../actions/registrationAction';
import {AxiosError} from 'axios';
import {User} from '../../../types/type';

const initialState = {
  user: null as User | unknown,
  loading: false,
  error: null as AxiosError | unknown,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registrationUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(registrationUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(registrationUser.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
