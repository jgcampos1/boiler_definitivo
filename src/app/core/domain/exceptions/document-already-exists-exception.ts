import { HttpErrorsType } from '../../application/protocols';
import { type DomainException } from './domain-exception';

export class DocumentAlreadyExistsException implements DomainException {
  message = 'Já existe um usuário com esse documento em nossa base de dados';
  code = HttpErrorsType.DOCUMENT_ALREADY_EXISTS_EXCEPTION;
}
