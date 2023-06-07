import { type Either, Error, Success } from '~/app/core/domain/either/either';

// TODO: Verify this code any, used to handle erros just in one place.
type Predicate = (value: any) => boolean;

export type CombinedPredicated<E> = Array<[Predicate, E]>;

export const combinedPredicates = <E, S>({
  value,
  predicatePairs
}: {
  value: S;
  predicatePairs: CombinedPredicated<E>;
}): Either<E, S> => {
  for (const [verifier, error] of predicatePairs) {
    if (verifier(value)) {
      return new Error(error);
    }
  }

  return new Success(value);
};
