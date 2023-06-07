import { createAction } from '@reduxjs/toolkit';
import { TokenModel } from '~/app/application/auth/domain/models/toke-model';
import {
  ActionMap,
  ReducerMap
} from '~/app/core/store/adapters/action-reducer-map';

import { AuthSliceState, AUTH_SLICE_ACTIONS } from '../types';

export const setToken: ActionMap<TokenModel> = createAction(
  AUTH_SLICE_ACTIONS.SET_TOKEN
);

export const setTokenReducer: ReducerMap<AuthSliceState, TokenModel> = (
  state,
  { payload }
) => {
  state = payload;
  return state;
};
