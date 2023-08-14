import { useFormContext } from 'react-hook-form';

import { PasswordIcon, TextInput } from '~/app/application/shared/components';
import { useToggle } from '~/app/application/shared/hooks/use-toggle';
import { useTranslation } from '~/app/application/shared/hooks/use-translation';
import { theme } from '~/app/application/shared/styles/theme';

import {
  Container,
  SubTitle,
  SubmitButton,
  Title
} from './form-reset-password-styles';

interface Props {
  submit: (value: any) => void;
}

export const FormForgotPassword = ({ submit }: Props) => {
  const { translate } = useTranslation('login');
  const { handleSubmit } = useFormContext();
  const [showPassword, toggleShowPassword] = useToggle(false);

  return (
    <Container component='form' onSubmit={handleSubmit(submit)}>
      <Title variant='h4'>{translate('resetPassword.title')}</Title>
      <SubTitle variant='body1'>{translate('resetPassword.subtitle')}</SubTitle>
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
      <TextInput
        name='confirmPassword'
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

      <SubmitButton variant='contained' type='submit'>
        {translate('resetPassword.resetBtn')}
      </SubmitButton>
    </Container>
  );
};
