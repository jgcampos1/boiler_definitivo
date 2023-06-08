import { RequestResponse } from '~/app/core/application/http-response/http-response';
import {
  HttpClient,
  HttpMethod
} from '~/app/core/application/protocols/http-client';
import type { ServiceCommand } from '~/app/core/domain/command/service-command';
import { error, success } from '~/app/core/domain/either/either';

export class RecoveryPassword
  implements ServiceCommand<RecoveryPassword.Response>
{
  constructor(
    private readonly httpClient: HttpClient<RecoveryPassword.Response>,
    private readonly url: string
  ) {}

  async execute(
    params: RecoveryPassword.Params
  ): Promise<ServiceCommand.Response<RecoveryPassword.Response>> {
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

export namespace RecoveryPassword {
  export type Params = { email: string };

  export type Response = { success: boolean };
}
