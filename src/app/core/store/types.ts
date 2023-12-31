import {
  type ActionCreatorWithoutPayload,
  type ActionCreatorWithPayload,
  type PayloadAction
} from '@reduxjs/toolkit';

import { type store } from './store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ActionCreatorPayload<T> = T extends void
  ? ActionCreatorWithoutPayload
  : ActionCreatorWithPayload<T>;

export type ReducerFunction<S, T = void> = (
  state: S,
  payload: PayloadAction<T>
) => void;
