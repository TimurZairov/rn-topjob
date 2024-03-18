import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slice/authSlice/authSlice';
import vacanciesReducer from './slice/vacanciesSlice/vacanciesSlice';
import servicesReducer from './slice/servicesSlice/servicesSlice';

export const store = configureStore({
  reducer: {
    user: authReducer,
    vacancies: vacanciesReducer,
    services: servicesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
