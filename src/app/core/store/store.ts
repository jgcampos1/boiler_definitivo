import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector
} from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { authReducer } from '~/app/application/auth/store/reducer';
import { authSlice } from '~/app/application/auth/store/slice/auth-slice';
import { authSliceName } from '~/app/application/auth/store/types';
import { ToastSlice } from '~/app/application/general/toast/slice/toast-slice';
import { toastSliceName } from '~/app/application/general/toast/types/toast-constants';
import { userReducer } from '~/app/application/user/store/reducer';
import { userSlice } from '~/app/application/user/store/slice/user-slice';
import { userSliceName } from '~/app/application/user/store/types';
import { apiSlice } from '~/app/core/store/apiSlice';

import { type AppDispatch as AppDispatchTypes, type RootState } from './types';

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<(typeof store)['getState']>;
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [toastSliceName]: ToastSlice.reducer,
    [authSliceName]: authSlice.reducer,
    [userSliceName]: userSlice.reducer,
    auth: authReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});

setupListeners(store.dispatch);

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatchTypes>();
