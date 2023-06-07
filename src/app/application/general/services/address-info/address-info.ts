import { RequestResponse } from '~/app/core/application/http-response/http-response';
import type { HttpClient } from '~/app/core/application/protocols';
import { HttpMethod } from '~/app/core/application/protocols';
import type { ServiceCommand } from '~/app/core/domain/command/service-command';
import { error, success } from '~/app/core/domain/either/either';

import { AddressModel } from '../../domain/address-model';

export class AddressInfo implements ServiceCommand<AddressInfo.Response> {
  constructor(
    private readonly httpClient: HttpClient<AddressInfo.Response>,
    private readonly url: string
  ) {}

  async execute({
    zipCode
  }: AddressInfo.Params): Promise<
    ServiceCommand.Response<AddressInfo.Response>
  > {
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.GET,
      url: `${this.url}?zipCode=${zipCode}`
    });

    const responseOrError = RequestResponse.handle(httpResponse);

    if (responseOrError.isError()) {
      return error(responseOrError.value);
    }

    const response = responseOrError.value.response;
    return success(response);
  }
}

export namespace AddressInfo {
  export type Params = { zipCode: string };

  export type Response = AddressModel;
}
