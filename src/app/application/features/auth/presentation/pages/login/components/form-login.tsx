import { useFormContext } from 'react-hook-form';

import { PasswordIcon, TextInput } from '~/app/application/shared/components';
import { useToggle } from '~/app/application/shared/hooks/use-toggle';
import { useTranslation } from '~/app/application/shared/hooks/use-translation';
import { theme } from '~/app/application/shared/styles/theme';

import {
  Container,
  ForgotPasswordButton,
  SubmitButton,
  Title
} from './form-login-styles';

interface Props {
  submit: (value: any) => void;
}
export const FormLogin = ({ submit }: Props) => {
  const { translate } = useTranslation('login');
  const { handleSubmit } = useFormContext();
  const [showPassword, toggleShowPassword] = useToggle(true);
  return (
    <Container component='form' onSubmit={handleSubmit(submit)}>
      <Title variant='h4'>{translate('login.title')}</Title>
      <TextInput
        name='email'
        placeholder={translate('login.email')}
        size='small'
        type='email'
      />
      <TextInput
        name='password'
        placeholder={translate('login.password')}
        size='small'
        InputProps={{
          endAdornment: (
            <PasswordIcon
              {...{
                showPassword,
                toggleShowPassword,
                color: theme.palette.grey[500]
              }}
            />
          )
        }}
        type={showPassword ? 'text' : 'password'}
      />
      <ForgotPasswordButton type='button' variant='text' size='small' title=''>
        {translate('login.forgot')}
      </ForgotPasswordButton>
      <SubmitButton variant='contained' type='submit'>
        {translate('login.signInBtnText')}
      </SubmitButton>
    </Container>
  );
};
