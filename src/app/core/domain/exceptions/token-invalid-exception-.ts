import { HttpErrorsType } from '../../application/protocols/http-client';
import { type DomainException } from './domain-exception';

export class InvalidTokenException implements DomainException {
  message = 'Token de usuário inválido';
  code = HttpErrorsType.INVALID_TOKEN;
}
