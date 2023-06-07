import { HttpErrorsType } from '../../application/protocols';
import { type DomainException } from './domain-exception';

export class AccountNotConfirmedException implements DomainException {
  message = 'Sua conta ainda não foi confirmada, verifique seu email ou ';
  code = HttpErrorsType.ACCOUNT_NOT_CONFIRMED_EXCEPTION;
}
