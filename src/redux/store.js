// src/redux/store.js
import {configureStore} from '@reduxjs/toolkit';
import {appApi} from './api/apiSlice';

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(appApi.middleware),
});
