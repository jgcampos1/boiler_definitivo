import { RequestResponse } from '~/app/core/application/http-response/http-response';
import type { HttpClient } from '~/app/core/application/protocols';
import { HttpMethod } from '~/app/core/application/protocols';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { error, success } from '~/app/core/domain/either/either';

export class UpdatePasswordUser
  implements ServiceCommand<UpdatePasswordUser.Response>
{
  constructor(
    private readonly httpClient: HttpClient<UpdatePasswordUser.Response>,
    private readonly url: string
  ) {}

  async execute(
    params: UpdatePasswordUser.Params
  ): Promise<ServiceCommand.Response<UpdatePasswordUser.Response>> {
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.PUT,
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

export namespace UpdatePasswordUser {
  export type Params = {
    password: string;
    newPassword: string;
  };

  export type Response = void;
}
