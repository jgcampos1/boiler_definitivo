import { RequestResponse } from '~/app/core/application/http-response/http-response';
import {
  HttpClient,
  HttpMethod
} from '~/app/core/application/protocols/http-client';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { error, success } from '~/app/core/domain/either/either';

import { RegisterForm } from '../../domain/models/register-models';

export class Register implements ServiceCommand<Register.Response> {
  constructor(
    private readonly httpClient: HttpClient<Register.Response>,
    private readonly url: string
  ) {}

  async execute(
    params: Register.Params
  ): Promise<ServiceCommand.Response<Register.Response>> {
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

export namespace Register {
  export type Params = Omit<RegisterForm, 'passwordConfirmation'>;

  export type Response = void;
}
