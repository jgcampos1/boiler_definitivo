import { FormProvider, useForm } from 'react-hook-form';

import { FormLogin } from './components/form-login';

export const Login = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <FormLogin />
    </FormProvider>
  );
};
