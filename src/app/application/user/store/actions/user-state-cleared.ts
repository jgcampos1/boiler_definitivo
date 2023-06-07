import { createAction } from '@reduxjs/toolkit';
import { type ReducerFunction } from '~/app/core/store/types';

import {
  type UserState,
  USER_REDUCER_ACTIONS,
  USER_REDUCER_INITIAL_STATE
} from '../types';

export const userStateCleared = createAction(
  USER_REDUCER_ACTIONS.USER_STATE_CLEARED
);

export const userStateClearedReducer: ReducerFunction<UserState, void> = (
  state
) => {
  state = {
    ...USER_REDUCER_INITIAL_STATE
  };

  return state;
};
