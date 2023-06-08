import { HttpErrorsType } from '../../application/protocols/http-client';
import { type DomainException } from './domain-exception';

export class PhoneAlreadyExistsException implements DomainException {
  message = 'Já existe um usuário com esse telefone em nossa base de dados';
  code = HttpErrorsType.PHONE_ALREADY_EXISTS_EXCEPTION;
}
