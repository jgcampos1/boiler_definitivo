import { type Either } from '~/app/core/domain/either/either';
import { type DomainException } from '~/app/core/domain/exceptions';

export interface LocalCommand<R = any, T = any> {
  execute: (params: T) => LocalCommand.Response<R>;
}

export namespace LocalCommand {
  export type Response<R = any> = Either<ResponseError, R>;
  export type ResponseError<E = DomainException> = E;
}
