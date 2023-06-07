import { type DomainException } from '~/app/core/domain/exceptions/domain-exception';

export class UnexpectedError implements DomainException {
  type = 'UnexpectedError';
  message = 'Unexpected error';

  constructor(public error?: any) {}
}
