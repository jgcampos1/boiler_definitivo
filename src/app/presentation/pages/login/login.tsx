import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoginForm } from '~/app/application/auth/domain/models';
import {
  useEmailLoginMutation,
  useSendConfirmationEmailMutation
} from '~/app/application/auth/store/hooks';
import { HttpErrorsType } from '~/app/core/application/protocols';
import { ROUTES } from '~/app/main/types';

import { ToastType } from '../../common/types';
import { LogoSkyTech, TextButton } from '../../components';
import { useAuth, useToast } from '../../hooks';
import FormLogin from './form-login/form-login';
import { LoginFormValidationSchema } from './form-login/form-validation';
import { Button, Container, Content, Text } from './login-styles';

const resolver = zodResolver(LoginFormValidationSchema);
const Login = () => {
  const { useLogin } = useAuth();
  const { addToast } = useToast();
  const methods = useForm({ resolver, mode: 'onSubmit' });

  const navigate = useNavigate();
  const [login, { isLoading }] = useEmailLoginMutation();

  const [email, setEmail] = useState<string | null>();

  const [sendConfirmationEmail] = useSendConfirmationEmailMutation();
  const redirect = () => {
    navigate(ROUTES.DASHBOARD);
  };

  const resendEmail = () => {
    sendConfirmationEmail({ email })
      .unwrap()
      .then(() => {
        addToast({
          type: ToastType.SUCCESS,
          text: 'Email de confirmação enviado com sucesso'
        });
        setEmail(null);
      });
  };

  const singIn = (values: LoginForm) => {
    login(values)
      .unwrap()
      .then((response) => {
        useLogin(response.accessToken);
        addToast({
          type: ToastType.SUCCESS,
          text: 'Bem vindo'
        });
        redirect();
      })
      .catch((error) => {
        if (error.code === HttpErrorsType.ACCOUNT_NOT_CONFIRMED_EXCEPTION) {
          setEmail(values.email);
          return;
        }
        addToast({
          type: ToastType.ERROR,
          text: error.message
        });
      });
  };

  return (
    <>
      {email ? (
        <>
          <Container>
            <Content>
              <LogoSkyTech />
              <Text>
                Sua conta ainda não foi confirmada, verifique seu email ou
                clique para reenviar o email
              </Text>

              <Button onClick={() => resendEmail()}>Re-enviar email</Button>
              <TextButton
                title='voltar'
                onClick={() => {
                  setEmail(null);
                }}
              ></TextButton>
            </Content>
            +
          </Container>
        </>
      ) : (
        <FormProvider {...methods}>
          <FormLogin onSubmit={singIn} {...{ isLoading }} />
        </FormProvider>
      )}
    </>
  );
};

export default Login;
