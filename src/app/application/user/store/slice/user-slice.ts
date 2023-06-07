import { SliceCaseReducers } from '@reduxjs/toolkit';
import { createHydratedSlice } from '~/app/core/store/adapters';

import { userDataReducer } from '../actions/user-data';
import {
  userSliceName,
  UserState,
  USER_REDUCER_INITIAL_STATE,
  SET_USER
} from '../types';

export const userSlice = createHydratedSlice<
  UserState,
  SliceCaseReducers<UserState>,
  typeof userSliceName
>({
  name: userSliceName,
  initialState: { ...USER_REDUCER_INITIAL_STATE },
  reducers: {
    [SET_USER]: userDataReducer
  }
});
