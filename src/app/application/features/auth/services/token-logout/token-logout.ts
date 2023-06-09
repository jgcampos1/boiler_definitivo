import { RequestResponse } from '~/app/core/application/http-response/http-response';
import { CacheStorage } from '~/app/core/application/protocols/cache-storage';
import {
  HttpClient,
  HttpMethod
} from '~/app/core/application/protocols/http-client';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { error, success } from '~/app/core/domain/either/either';

// TODO review this service, we can move the logic to set the local storage to another part of the code.
export class TokenLogout implements ServiceCommand<TokenLogout.Response> {
  constructor(
    private readonly httpClient: HttpClient<TokenLogout.Response>,
    private readonly cacheStorage: CacheStorage,
    private readonly tokenKey: string,
    private readonly url: string
  ) {}

  async execute(): Promise<ServiceCommand.Response<TokenLogout.Response>> {
    const httpResponse = await this.httpClient.request({
      method: HttpMethod.POST,
      url: this.url
    });

    const responseOrError = RequestResponse.handle(httpResponse);

    if (responseOrError.isError()) {
      return error(responseOrError.value);
    }

    const response = responseOrError.value.response;

    this.cacheStorage.set(this.tokenKey, '');

    return success(response);
  }
}

export namespace TokenLogout {
  export type Params = void;

  export type Response = void;
}
