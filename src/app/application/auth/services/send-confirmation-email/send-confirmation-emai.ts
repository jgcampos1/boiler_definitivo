import { RequestResponse } from '~/app/core/application/http-response/http-response';
import type { HttpClient } from '~/app/core/application/protocols';
import { HttpMethod } from '~/app/core/application/protocols';
import type { ServiceCommand } from '~/app/core/domain/command/service-command';
import { error, success } from '~/app/core/domain/either/either';

export class SendConfirmationEmail
  implements ServiceCommand<SendConfirmationEmail.Response>
{
  constructor(
    private readonly httpClient: HttpClient<SendConfirmationEmail.Response>,
    private readonly url: string
  ) {}

  async execute(
    params: SendConfirmationEmail.Params
  ): Promise<ServiceCommand.Response<SendConfirmationEmail.Response>> {
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

export namespace SendConfirmationEmail {
  export type Params = { email: string };

  export type Response = { success: boolean };
}
