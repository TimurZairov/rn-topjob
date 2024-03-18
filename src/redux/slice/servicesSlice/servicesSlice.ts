import {createSlice} from '@reduxjs/toolkit';
import {getServices} from '../../actions/servicesAction';
import {Service} from '../../../types/type';

interface IInitialState {
  services: Service[];
  loading: boolean;
  error: unknown | string;
}

const initialState: IInitialState = {
  services: [],
  loading: false,
  error: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getServices.pending, state => {
      state.loading = true;
    });
    builder.addCase(getServices.fulfilled, (state, action) => {
      state.loading = false;
      state.services = action.payload;
    });
    builder.addCase(getServices.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

const {} = servicesSlice.actions;

export default servicesSlice.reducer;
