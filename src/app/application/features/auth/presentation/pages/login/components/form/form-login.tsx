import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router';

import {
  PasswordIcon,
  TextButton,
  TextInput
} from '~/app/application/shared/components';
import { useToggle } from '~/app/application/shared/hooks/use-toggle';
import { useTranslation } from '~/app/application/shared/hooks/use-translation';
import { theme } from '~/app/application/shared/styles/theme';
import { ROUTES } from '~/app/main/types/routes-enum';

import { Container, SubmitButton, Title } from './form-login-styles';
import { FormLoginType } from './validator/type';

interface Props {
  submit: (value: FormLoginType) => void;
  isLoading?: boolean;
}
export const FormLogin = ({ submit, isLoading }: Props) => {
  const { translate } = useTranslation('login');
  const { handleSubmit } = useFormContext();
  const [showPassword, toggleShowPassword] = useToggle(false);
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate(ROUTES.FORGOT_PASSWORD);
  };
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
      <TextButton
        title={translate('login.forgot')}
        onClick={handleForgotPassword}
      />
      <SubmitButton variant='contained' type='submit' {...{ isLoading }}>
        {translate('login.signInBtnText')}
      </SubmitButton>
    </Container>
  );
};
