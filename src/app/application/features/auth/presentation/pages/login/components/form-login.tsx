import { TextInput } from '~/app/application/shared/components';
import { useToggle } from '~/app/application/shared/hooks/use-toggle';

import {
  Container,
  ForgotPasswordButton,
  SubmitButton,
  Title
} from './form-login-styles';

export const FormLogin = () => {
  const [showPassword, toogleShowPassword] = useToggle(false);
  return (
    <Container>
      <Title variant='h4'> Sign in</Title>
      <TextInput name='email' placeholder='Email' size='small' />
      <TextInput
        name='password'
        placeholder='Password'
        size='small'
        type={showPassword ? 'text' : 'password'}
      />
      <ForgotPasswordButton type='button' variant='text' size='small' title=''>
        Forgot your password?
      </ForgotPasswordButton>
      <SubmitButton variant='contained'>sign in</SubmitButton>
    </Container>
  );
};
