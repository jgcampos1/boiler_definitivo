import { type Either } from '~/app/core/domain/either/either';
import { type DomainException } from '~/app/core/domain/exceptions';

export interface ServiceCommand<R = any, T = any> {
  execute: (params: T) => Promise<ServiceCommand.Response<R>>;
}

export namespace ServiceCommand {
  export type Response<R = any> = Either<ResponseError, R>;
  export type ResponseError<E = DomainException> = E;
}
