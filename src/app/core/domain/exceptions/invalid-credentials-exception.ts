import { HttpErrorsType } from '../../application/protocols/http-client';
import { type DomainException } from './domain-exception';

export class InvalidCredentialsException implements DomainException {
  message = 'Credenciais invalidas, verifique o email ou se senha inseriddos ';
  code = HttpErrorsType.INVALID_CREDENTIALS_EXCEPTION;
}
