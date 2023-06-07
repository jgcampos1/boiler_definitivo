import { createAction } from '@reduxjs/toolkit';
import { type UserModel } from '~/app/application/user/domain/model/user-model';
import {
  ActionMap,
  ReducerMap
} from '~/app/core/store/adapters/action-reducer-map';

import { type UserState, USER_REDUCER_ACTIONS } from '../types';

export const userData: ActionMap<UserModel> = createAction(
  USER_REDUCER_ACTIONS.USER_DATA
);

export const userDataReducer: ReducerMap<UserState, UserModel> = (
  state,
  { payload }
) => {
  state = payload;
  return state;
};
