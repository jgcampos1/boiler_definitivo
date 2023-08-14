import { AUTH_API_ROUTES } from '~/app/application/features/auth/api/routes';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { httpClient } from '~/app/core/infra/http/axios-http-client-adapter';

import { VerifySecurityToken } from './verify-security-token.service';

export const verifySecurityTokenService: ServiceCommand<VerifySecurityToken.Response> =
  new VerifySecurityToken(httpClient, AUTH_API_ROUTES.VERIFY_SECURITY_TOKEN);

export type { VerifySecurityToken };
