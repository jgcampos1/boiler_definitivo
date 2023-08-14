import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { useToastAlert } from '~/app/application/shared/hooks/use-toast-alert';
import { ROUTES } from '~/app/main/types/routes-enum';

import { useEmailLoginMutation } from '../../../store/hooks';
import { FormLogin } from './components/form/form-login';
import { resolver } from './components/form/validator';
import { FormLoginType } from './components/form/validator/type';

export const Login = () => {
  const navigate = useNavigate();
  const [singIn, { isLoading, isError, isSuccess, error }] =
    useEmailLoginMutation();
  const methods = useForm<FormLoginType>({
    resolver
  });

  const handleLogin = (value: FormLoginType) => {
    singIn(value);
  };
  useToastAlert({
    isError,
    isSuccess,
    error,
    successMessage: 'Login realizado com sucesso',
    onSuccess: () => {
      navigate(ROUTES.HOME);
    }
  });
  return (
    <FormProvider {...methods}>
      <FormLogin submit={handleLogin} {...{ isLoading }} />
    </FormProvider>
  );
};
