export type Either<E, S> = Error<E, S> | Success<E, S>;

export class Error<E, S> {
  readonly value: E;

  constructor(value: E) {
    this.value = value;
  }

  isError(): this is Error<E, S> {
    return true;
  }

  isSuccess(): this is Success<E, S> {
    return false;
  }
}

export class Success<E, S> {
  readonly value: S;

  constructor(value: S) {
    this.value = value;
  }

  isError(): this is Error<E, S> {
    return false;
  }

  isSuccess(): this is Success<E, S> {
    return true;
  }
}

export const error = <E, S>(e: E): Either<E, S> => {
  return new Error<E, S>(e);
};

export const success = <E, S>(s: S): Either<E, S> => {
  return new Success<E, S>(s);
};
