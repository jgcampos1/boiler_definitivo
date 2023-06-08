import { RequestResponse } from '~/app/core/application/http-response/http-response';
import { HttpMethod } from '~/app/core/application/protocols/http-client';
import { ServiceCommand } from '~/app/core/domain/command/service-command';
import { error, success } from '~/app/core/domain/either/either';
import { httpClient } from '~/app/core/infra/http/axios-http-client-adapter';

export class BaseService<REQ, RES> implements ServiceCommand<RES, REQ> {
  constructor(
    private readonly url: string,
    private readonly httpMethod: HttpMethod
  ) {}

  async execute(params: REQ): Promise<ServiceCommand.Response<RES>> {
    const httpResponse = await httpClient.request({
      method: this.httpMethod,
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
