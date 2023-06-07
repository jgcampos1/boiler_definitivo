import { HttpErrorsType } from '../../application/protocols';
import { type DomainException } from './domain-exception';

export class UserAlreadyExistsException implements DomainException {
  message = 'Usuário já existente em nossa base de dados';
  code = HttpErrorsType.USER_ALREADY_EXISTS;
}
