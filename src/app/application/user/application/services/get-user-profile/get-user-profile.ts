import { type UserModel } from '~/app/application/user/domain/model/user-model';
import { RequestResponse } from '~/app/core/application/http-response/http-response';
import { CacheStorage } from '~/app/core/application/protocols/cache-storage';
import {
  HttpClient,
  HttpMethod
} from '~/app/core/application/protocols/http-client';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { error, success } from '~/app/core/domain/either/either';

export class GetUserProfile implements ServiceCommand<GetUserProfile.Response> {
  constructor(
    private readonly httpClient: HttpClient<GetUserProfile.Response>,
    private readonly url: string,
    private readonly cacheStorage: CacheStorage,
    private readonly tokenKey: string
  ) {}

  async execute(): Promise<ServiceCommand.Response<GetUserProfile.Response>> {
    const userProfileData: GetUserProfile.LocalStorageSystemInfo =
      this.cacheStorage.get(this.tokenKey);

    if (userProfileData?.document) {
      return success(userProfileData);
    }
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.GET,
      url: this.url
    });

    const responseOrError = RequestResponse.handle(httpResponse);

    if (responseOrError.isError()) {
      return error(responseOrError.value);
    }

    const response = responseOrError.value.response;

    this.cacheStorage.set(this.tokenKey, { ...userProfileData, ...response });

    return success(response);
  }
}

export namespace GetUserProfile {
  export type Params = {
    id: string;
  };

  export type Response = UserModel;

  export type LocalStorageSystemInfo = GetUserProfile.Response | undefined;
}
