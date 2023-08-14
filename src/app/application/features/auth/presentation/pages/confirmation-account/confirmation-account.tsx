import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { ToastType } from '~/app/application/shared/common/types/toast-types';
import { FullPageLoading } from '~/app/application/shared/components';
import { useQuery } from '~/app/application/shared/hooks/use-query';
import { useToast } from '~/app/application/shared/hooks/use-toast';
import { HttpErrorsType } from '~/app/core/application/protocols/http-client';
import { ROUTES } from '~/app/main/types/routes-enum';

import {
  useConfirmationTokenMutation,
  useVerifySecurityTokenMutation
} from '../../../store/hooks';
import { ResendConfirmationToken } from './components/resend-confirmation-token';
import { FormConfirmationAccount } from './form/form-confirmation-account';
import { FormConfirmAccountType, resolver } from './form/validator';

export const ConfirmationAccount = () => {
  const methods = useForm<FormConfirmAccountType>({ resolver });
  const { addToast } = useToast();
  const navigate = useNavigate();
  const query = useQuery();
  const token = query.get('token');

  const [
    verifyToken,
    { error: verifyTokenError, isLoading: isVerifyTokenLoading }
  ] = useVerifySecurityTokenMutation();
  const [
    confirmationToken,
    { error: confirmationTokenError, isLoading: confirmationTokenLoading }
  ] = useConfirmationTokenMutation();

  const submit = (value) => {
    const { password } = value;
    confirmationToken({ password, token });
  };

  useEffect(() => {
    if (!verifyTokenError) return;
    addToast({
      type: ToastType.ERROR,
      text: verifyTokenError.message
    });
    if (verifyTokenError?.code === HttpErrorsType.INVALID_TOKEN) {
      navigate(ROUTES.LOGIN);
    }
  }, [verifyTokenError]);

  useEffect(() => {
    if (!token) navigate(ROUTES.LOGIN);
    verifyToken({ token });
  }, [token]);

  const tokenExpired =
    confirmationTokenError?.code === HttpErrorsType.EXPIRATION_INVALID ||
    verifyTokenError?.code === HttpErrorsType.EXPIRATION_INVALID;

  if (isVerifyTokenLoading) {
    return <FullPageLoading />;
  }

  if (tokenExpired) {
    return <ResendConfirmationToken />;
  }
  return (
    <FormProvider {...methods}>
      <FormConfirmationAccount
        {...{ submit, isLoading: confirmationTokenLoading }}
      />
    </FormProvider>
  );
};
