import { type UserModel } from '~/app/application/user/domain/model/user-model';

export const userSliceName = 'userSlice' as const;
export const SET_USER = 'setUser' as const;

export const USER_REDUCER_ACTIONS = {
  USER_STATE_CLEARED: `@user/stateCleared`,
  USER_DATA: `@user/data`
} as const;

export const USER_REDUCER_INITIAL_STATE: UserModel = {
  email: '',
  id: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  document: ''
};

export type UserState = UserModel;
