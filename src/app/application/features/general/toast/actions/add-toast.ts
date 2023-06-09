import { createAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { ActionCreatorPayload, ReducerFunction } from '~/app/core/store/types';

import { TOAST_REDUCER_KEYS } from '../types/toast-constants';
import { ToastSliceState, ToastTypes } from '../types/toast-types';

type Payload = {
  text: string;
  type: ToastTypes;
};

export const addToast: ActionCreatorPayload<Payload> = createAction(
  TOAST_REDUCER_KEYS.ADD_TOAST
);

export const addToastReducer: ReducerFunction<ToastSliceState, Payload> = (
  state,
  action
) => {
  state.toasts.push({
    id: v4(),
    ...action.payload
  });
};
