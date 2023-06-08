import { HttpErrorsType } from '../../application/protocols/http-client';
import { type DomainException } from './domain-exception';

export class EmailAlreadyExistsException implements DomainException {
  message = 'Já existe um usuário com esse email em nossa base de dados';
  code = HttpErrorsType.EMAIL_ALREADY_EXISTS_EXCEPTION;
}
