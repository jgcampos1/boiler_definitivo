import { RequestResponse } from '~/app/core/application/http-response/http-response';
import {
  HttpClient,
  HttpMethod
} from '~/app/core/application/protocols/http-client';
import type { ServiceCommand } from '~/app/core/domain/command/service-command';
import { error, success } from '~/app/core/domain/either/either';

export class VerifySecurityToken
  implements ServiceCommand<VerifySecurityToken.Response>
{
  constructor(
    private readonly httpClient: HttpClient<VerifySecurityToken.Response>,
    private readonly url: string
  ) {}

  async execute({
    token
  }: VerifySecurityToken.Params): Promise<
    ServiceCommand.Response<VerifySecurityToken.Response>
  > {
    const url = `${this.url}?token=${token}`;
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.GET,
      url: url
    });

    const responseOrError = RequestResponse.handle(httpResponse);

    if (responseOrError.isError()) {
      return error(responseOrError.value);
    }

    const response = responseOrError.value.response;

    return success(response);
  }
}

export namespace VerifySecurityToken {
  export type Params = { token: string };

  export type Response = void;
}
