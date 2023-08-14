import { RoleModel } from './role-model';

export type TokenModel = {
  accessToken?: string;
  refreshToken?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  userId?: string;
  roles?: RoleModel[];
};
