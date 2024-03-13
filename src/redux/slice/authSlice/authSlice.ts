import {createSlice} from '@reduxjs/toolkit';
import {registrationUser} from '../../actions/registrationAction';
import {User} from '../../../types/type';
import {checkTokenAction} from '../../actions/checkTokenAction';

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | unknown;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
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
      state.loading = false;
      state.error = action?.payload || 'Error';
    });

    //splash screen check token
    builder.addCase(checkTokenAction.pending, state => {
      state.loading = true;
    });

    builder.addCase(checkTokenAction.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });

    builder.addCase(checkTokenAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload || 'Error';
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
