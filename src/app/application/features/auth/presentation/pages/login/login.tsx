import { TextField } from '@mui/material';

import {
  Container,
  ForgotPasswordButton,
  SubmitButton,
  Title
} from './login-styles';

export const Login = () => {
  return (
    <Container>
      <Title variant='h4'> Sign in</Title>

      <TextField placeholder='Email' size='small' />
      <TextField placeholder='Password' size='small' />
      <ForgotPasswordButton type='button' variant='text' size='small' title=''>
        Forgot your password?
      </ForgotPasswordButton>
      <SubmitButton variant='contained'>sign in</SubmitButton>
    </Container>
  );
};
