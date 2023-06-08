import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  useResetPasswordMutation,
  useSendConfirmationEmailMutation
} from '~/app/application/auth/store/hooks';
import { HttpErrorsType } from '~/app/core/application/protocols/http-client';
import { tokenDecoder } from '~/app/core/infra/decoder/jwt-token-decoder';
import { ROUTES } from '~/app/main/types/routes-enum';
import { ToastType } from '~/app/presentation/common/types/toast-types';
import { ArrowPrev } from '~/app/presentation/components';
import { useQuery } from '~/app/presentation/hooks/use-query';
import { useToast } from '~/app/presentation/hooks/use-toast';
import { useToastAlert } from '~/app/presentation/hooks/use-toast-alert';
import { useToggle } from '~/app/presentation/hooks/use-toggle';

import FormPasswordLogin from './form-reset-password/form-reset-password';
import { ResetPasswordFormValidation } from './form-reset-password/form-validation/form-validation';
import {
  BackPageButton,
  Button,
  Container,
  Description,
  TitleForm
} from './reset-password-styles';
const resolver = zodResolver(ResetPasswordFormValidation);

const ResetPassword = () => {
  const methods = useForm({ resolver, mode: 'onSubmit' });
  const navigate = useNavigate();
  const query = useQuery();

  const token = query.get('token');
  const { addToast } = useToast();
  const [expiredToken, , { set }] = useToggle(false);
  const [sendConfirmationEmail, { data: dataSendConfirmationEmail }] =
    useSendConfirmationEmailMutation();
  const [ResetPassword, { isSuccess, error, isLoading }] =
    useResetPasswordMutation();

  const handleResetPassword = (values) => {
    ResetPassword({ password: values?.password, token });
  };

  const redirect = () => navigate(ROUTES.LOGIN);

  const handleButtonResendToken = () => {
    const { email } = tokenDecoder.decode<{ email }>(token);
    sendConfirmationEmail({ email });
  };

  useEffect(() => {
    if (dataSendConfirmationEmail?.success) {
      addToast({
        type: ToastType.SUCCESS,
        text: 'Email enviado, por favor verifique sua caixa de email'
      });

      navigate(ROUTES.LOGIN);
    }
  }, [dataSendConfirmationEmail]);

  useEffect(() => {
    if (!error) return;
    if (error?.code === HttpErrorsType.INVALID_TOKEN) {
      addToast({
        type: ToastType.ERROR,
        text: error.message
      });
      navigate(ROUTES.LOGIN);
    }
    if (error?.code === HttpErrorsType.EXPIRATION_INVALID) {
      addToast({
        type: ToastType.ERROR,
        text: error.message
      });
      set(true);
    }
  }, [error]);

  useToastAlert({
    isSuccess: isSuccess,
    successMessage: 'Senha atualizada com sucesso',
    onSuccess: () => redirect()
  });
  return (
    <Container>
      <BackPageButton href={ROUTES.LOGIN} title='voltar' icon={<ArrowPrev />} />

      {expiredToken ? (
        <>
          <TitleForm variant='h1'>Token Expirado</TitleForm>

          <Description>
            O token de recuperação de senha expirou, deseja reenviar o codigo?
          </Description>
          <Button onClick={() => handleButtonResendToken()}>
            Reenviar email
          </Button>
        </>
      ) : (
        <>
          <TitleForm variant='h1'>Nova Senha</TitleForm>
          <Description variant='body2'>
            insira a nova senha de sua conta
          </Description>

          <FormProvider {...methods}>
            <FormPasswordLogin
              onSubmit={handleResetPassword}
              {...{ isLoading }}
            />
          </FormProvider>
        </>
      )}
    </Container>
  );
};

export default ResetPassword;
