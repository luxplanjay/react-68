import { configureStore } from '@reduxjs/toolkit';
import { accountReducer } from './account/accountSlice';
import { localeReducer } from './locale/localeSlice';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    locale: localeReducer,
  },
});
