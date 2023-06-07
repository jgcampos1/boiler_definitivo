import { RequestResponse } from '~/app/core/application/http-response/http-response';
import type {
  CacheStorage,
  HttpClient
} from '~/app/core/application/protocols';
import { HttpMethod } from '~/app/core/application/protocols';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { error, success } from '~/app/core/domain/either/either';

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
