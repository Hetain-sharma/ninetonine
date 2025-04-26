// src/redux/store.js
import {configureStore} from '@reduxjs/toolkit';
import {appApi} from './api/apiSlice';
import enrollReducer from './Enroll/enrollSlice'; // ✅ No curly braces!

export const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    enroll: enrollReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(appApi.middleware),
});
