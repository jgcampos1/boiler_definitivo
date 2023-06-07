import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { httpAuthorizedClient } from '~/app/core/infra/http/autorized-http.client-adapter';

import { GENERAL_API_ROUTES } from '../../api/routes';
import { AddressInfo } from './address-info';

export const addressInfoService: ServiceCommand<AddressInfo.Response> =
  new AddressInfo(httpAuthorizedClient, GENERAL_API_ROUTES.ADDRESS_INFO);

export type { AddressInfo };
