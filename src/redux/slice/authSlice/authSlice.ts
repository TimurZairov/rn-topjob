import {createSlice} from '@reduxjs/toolkit';
import {registrationUser} from '../../actions/registrationAction';
import {User} from '../../../types/type';
import {checkTokenAction} from '../../actions/checkTokenAction';
import {loginAction} from '../../actions/loginAction';
import {userInfoAction} from '../../actions/userInfoAction';

interface AuthState {
  user: User | null;
  token: undefined | string | null;
  loading: boolean;
  error: string | unknown;
}

const initialState: AuthState = {
  user: null,
  token: undefined,
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
      state.token = action.payload;
    });

    builder.addCase(checkTokenAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.payload || 'Error';
    });

    //login user
    builder.addCase(loginAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    //update user
    builder.addCase(userInfoAction.pending, state => {
      state.loading = true;
    });
    builder.addCase(userInfoAction.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(userInfoAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
