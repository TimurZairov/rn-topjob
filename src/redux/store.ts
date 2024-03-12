import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slice/authSlice/authSlice';

export const store = configureStore({
  reducer: {
    user: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
