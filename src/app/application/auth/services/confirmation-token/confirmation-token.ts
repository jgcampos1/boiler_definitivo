import { RequestResponse } from '~/app/core/application/http-response/http-response';
import {
  HttpClient,
  HttpMethod
} from '~/app/core/application/protocols/http-client';
import type { ServiceCommand } from '~/app/core/domain/command/service-command';
import { error, success } from '~/app/core/domain/either/either';

export class ConfirmationToken
  implements ServiceCommand<ConfirmationToken.Response>
{
  constructor(
    private readonly httpClient: HttpClient<ConfirmationToken.Response>,
    private readonly url: string
  ) {}

  async execute(
    params: ConfirmationToken.Params
  ): Promise<ServiceCommand.Response<ConfirmationToken.Response>> {
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.POST,
      url: this.url,
      body: params
    });

    const responseOrError = RequestResponse.handle(httpResponse);

    if (responseOrError.isError()) {
      return error(responseOrError.value);
    }

    const response = responseOrError.value.response;

    return success(response);
  }
}

export namespace ConfirmationToken {
  export type Params = {
    token: string;
  };
  export type Response = {
    success: boolean;
  };
}
