import { SliceCaseReducers } from '@reduxjs/toolkit';
import { createHydratedSlice } from '~/app/core/store/adapters/create-hydrated-slice';

import { addToastReducer } from '../actions/add-toast';
import { removeToastReducer } from '../actions/remove-toast';
import {
  ADD_TOAST,
  REMOVE_TOAST,
  toastInitialState,
  toastSliceName
} from '../types/toast-constants';
import { ToastSliceState } from '../types/toast-types';

export const ToastSlice = createHydratedSlice<
  ToastSliceState,
  SliceCaseReducers<ToastSliceState>,
  typeof toastSliceName
>({
  name: toastSliceName,
  initialState: toastInitialState,
  reducers: {
    [ADD_TOAST]: addToastReducer,
    [REMOVE_TOAST]: removeToastReducer
  }
});
