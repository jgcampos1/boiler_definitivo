import {
  type HttpResponse,
  HttpStatusCode,
  HttpErrorsType
} from '~/app/core/application/protocols';
import { type ServiceCommand } from '~/app/core/domain/command/service-command';
import { error, success } from '~/app/core/domain/either/either';
import { UnexpectedError } from '~/app/core/domain/exceptions';

import { AccountNotConfirmedException } from '../../domain/exceptions/account-not-confirmed-exception';
import { DocumentAlreadyExistsException } from '../../domain/exceptions/document-already-exists-exception';
import { EmailAlreadyExistsException } from '../../domain/exceptions/email-already-exists-exception';
import { ExpirationTokenException } from '../../domain/exceptions/expiration-token-exception';
import { InvalidCredentialsException } from '../../domain/exceptions/invalid-credentials-exception';
import { PhoneAlreadyExistsException } from '../../domain/exceptions/phone-already-exists-exception';
import { InvalidTokenException } from '../../domain/exceptions/token-invalid-exception-';
import { UserAlreadyExistsException } from '../../domain/exceptions/user-already-exists-exception';
import {
  type CombinedPredicated,
  combinedPredicates
} from './combined-predicates';

export class RequestResponse<R> {
  private constructor(private readonly _response: R) {
    Object.freeze(this);
  }

  public static handle<R>(
    httpResponse: HttpResponse<R>
  ): ServiceCommand.Response<RequestResponse<R>> {
    const { statusCode, error: httpError } = httpResponse;

    if (this.isSuccess(statusCode)) {
      return success(new RequestResponse(httpResponse.body));
    }

    const predicates: CombinedPredicated<ServiceCommand.ResponseError> = [
      [this.errorTypeInvalidTokenError, new InvalidTokenException()],
      [this.errorTypeExpirationTokenError, new ExpirationTokenException()],
      [this.errorTypeUserAlreadyExists, new UserAlreadyExistsException()],
      [this.errorTypeEmailAlreadyExists, new EmailAlreadyExistsException()],
      [
        this.errorTypeDocumentAlreadyExists,
        new DocumentAlreadyExistsException()
      ],
      [this.errorTypePhoneAlreadyExists, new PhoneAlreadyExistsException()],
      [this.errorTypeInvalidCredentials, new InvalidCredentialsException()],
      [this.errorAccountNotConfirmed, new AccountNotConfirmedException()]
    ];
    const errors = combinedPredicates({
      value: httpError?.code,
      predicatePairs: predicates
    });

    if (errors.isError()) {
      return error(errors.value);
    }

    return error(new UnexpectedError());
  }

  private static isSuccess(statusCode: HttpStatusCode): boolean {
    return statusCode >= 200 && statusCode <= 299;
  }

  // TODO: Fix the error handle in the application
  private static errorTypeInvalidTokenError(type: HttpErrorsType): boolean {
    return type === HttpErrorsType.INVALID_TOKEN;
  }
  private static errorTypeExpirationTokenError(type: HttpErrorsType): boolean {
    return type === HttpErrorsType.EXPIRATION_INVALID;
  }

  private static errorTypeEmailAlreadyExists(type: HttpErrorsType): boolean {
    return type === HttpErrorsType.EMAIL_ALREADY_EXISTS_EXCEPTION;
  }

  private static errorTypePhoneAlreadyExists(type: HttpErrorsType): boolean {
    return type === HttpErrorsType.PHONE_ALREADY_EXISTS_EXCEPTION;
  }

  private static errorTypeDocumentAlreadyExists(type: HttpErrorsType): boolean {
    return type === HttpErrorsType.DOCUMENT_ALREADY_EXISTS_EXCEPTION;
  }

  private static errorTypeUserAlreadyExists(type: HttpErrorsType): boolean {
    return type === HttpErrorsType.USER_ALREADY_EXISTS;
  }

  private static errorAccountNotConfirmed(type: HttpErrorsType): boolean {
    return type === HttpErrorsType.ACCOUNT_NOT_CONFIRMED_EXCEPTION;
  }

  PhoneAlreadyExistsException;
  DocumentAlreadyExistsException;
  EmailAlreadyExistsException;
  private static errorTypeInvalidCredentials(type: HttpErrorsType): boolean {
    return type === HttpErrorsType.INVALID_CREDENTIALS_EXCEPTION;
  }

  get response(): R {
    return this._response;
  }
}
