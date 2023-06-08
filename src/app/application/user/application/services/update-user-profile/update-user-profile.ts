import { RequestResponse } from '~/app/core/application/http-response/http-response';
import {
  HttpClient,
  HttpMethod
} from '~/app/core/application/protocols/http-client';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { error, success } from '~/app/core/domain/either/either';

import { UpdateUserModel } from '../../../domain/model/update-user-model';

export class UpdateUserProfile
  implements ServiceCommand<UpdateUserProfile.Response>
{
  constructor(
    private readonly httpClient: HttpClient<UpdateUserProfile.Response>,
    private readonly url: string
  ) {}

  async execute(
    params: UpdateUserProfile.Params
  ): Promise<ServiceCommand.Response<UpdateUserProfile.Response>> {
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.PATCH,
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

export namespace UpdateUserProfile {
  export type Params = UpdateUserModel;

  export type Response = void;
}
