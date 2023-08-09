import { FormProvider, useForm } from 'react-hook-form';

import { useEmailLoginMutation } from '../../../store/hooks';
import { FormLogin } from './components/form-login';

export const Login = () => {
  const [singIn] = useEmailLoginMutation();
  const methods = useForm();

  const handleLogin = (value) => {
    singIn(value);
  };
  return (
    <FormProvider {...methods}>
      <FormLogin submit={handleLogin} />
    </FormProvider>
  );
};
