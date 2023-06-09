import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { RegisterForm } from '~/app/application/features/auth/domain/models/register-models';
import { useRegisterMutation } from '~/app/application/features/auth/store/hooks';
import { useToastAlert } from '~/app/application/shared/hooks/use-toast-alert';
import { ROUTES } from '~/app/main/types/routes-enum';

import FormRegister from './form-register/form-register';

const Register = () => {
  const navigate = useNavigate();

  const methods = useForm<RegisterForm>();
  const [register, { isError, isSuccess, error, isLoading }] =
    useRegisterMutation();
  const createUser = (values: RegisterForm) => {
    register({
      document: values.document,
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      password: values.password,
      phoneNumber: values.phoneNumber
    });
  };

  const redirect = () => navigate(ROUTES.LOGIN);

  useToastAlert({
    error: error,
    isError: isError
  });

  useToastAlert({
    isSuccess: isSuccess,
    successMessage: 'Cadastro realizado com sucesso',
    onSuccess: () => redirect()
  });

  return (
    <FormProvider {...methods}>
      <FormRegister onSubmit={createUser} {...{ isLoading }} />
    </FormProvider>
  );
};

export default Register;
