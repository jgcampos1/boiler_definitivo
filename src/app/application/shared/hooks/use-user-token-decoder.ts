import { tokenDecoder } from '~/app/core/infra/decoder/jwt-token-decoder/index';

import { RoleModel } from '../../features/auth/domain/models/role-model';

type DecodedToken = {
  firstName?: string;
  lastName?: string;
  email?: string;
  userId?: string;
  roles?: RoleModel[];
};
export const useUserTokenDecoder = () => {
  const decodeFn = (token: string) =>
    tokenDecoder.decode(token) as DecodedToken;

  return { decodeFn };
};
