import { createAction } from '@reduxjs/toolkit';
import { type ReducerFunction } from '~/app/core/store/types';

import { TokenModel } from '../../domain/models/toke-model';
import { AUTH_REDUCER_ACTIONS, AUTH_REDUCER_INITIAL_STATE } from '../types';

export const authStateCleared = createAction(
  AUTH_REDUCER_ACTIONS.AUTH_STATE_CLEARED
);

export const authStateClearedReducer: ReducerFunction<TokenModel, void> = (
  state
) => {
  state = {
    ...AUTH_REDUCER_INITIAL_STATE
  };

  return state;
};
