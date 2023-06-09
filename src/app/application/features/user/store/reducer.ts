import { createReducer } from '@reduxjs/toolkit';

import { userData, userDataReducer } from './actions/user-data';
import {
  userStateCleared,
  userStateClearedReducer
} from './actions/user-state-cleared';
import { userApi } from './api';
import { USER_REDUCER_INITIAL_STATE } from './types';

export const userReducer = createReducer(
  USER_REDUCER_INITIAL_STATE,
  (builder) => {
    builder.addCase(userStateCleared, userStateClearedReducer);
    builder.addCase(userData, userDataReducer);
    builder.addMatcher(
      userApi.endpoints.getUserProfile.matchFulfilled,
      (state, { payload }) => {
        state = payload;
        return state;
      }
    );
  }
);
