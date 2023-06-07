import { SliceCaseReducers } from '@reduxjs/toolkit';
import { createHydratedSlice } from '~/app/core/store/adapters';

import { addToastReducer } from '../actions/add-toast';
import { removeToastReducer } from '../actions/remove-toast';
import { ToastSliceState } from '../types';
import {
  ADD_TOAST,
  REMOVE_TOAST,
  toastInitialState,
  toastSliceName
} from '../types/toast-constants';

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
