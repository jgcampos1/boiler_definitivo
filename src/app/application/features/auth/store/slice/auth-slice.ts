import { SliceCaseReducers } from '@reduxjs/toolkit';
import { createHydratedSlice } from '~/app/core/store/adapters/create-hydrated-slice';

import { setTokenReducer } from '../actions/set-token';
import {
  authSliceName,
  AuthSliceState,
  SET_TOKEN_INITIAL_STATE,
  SET_TOKEN
} from '../types';

export const authSlice = createHydratedSlice<
  AuthSliceState,
  SliceCaseReducers<AuthSliceState>,
  typeof authSliceName
>({
  name: authSliceName,
  initialState: { ...SET_TOKEN_INITIAL_STATE },
  reducers: {
    [SET_TOKEN]: setTokenReducer
  }
});
