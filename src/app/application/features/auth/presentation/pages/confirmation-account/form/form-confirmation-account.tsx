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
} from './form-confirmation-account-styles';
import { FormConfirmAccountType } from './validator';

interface Props {
  submit: (value: FormConfirmAccountType) => void;
  isLoading: boolean;
}

export const FormConfirmationAccount = ({ submit, isLoading }: Props) => {
  const [showPassword, toggleShowPassword] = useToggle(false);
  const { translate } = useTranslation('login');
  const { handleSubmit } = useFormContext();

  return (
    <Container component='form' onSubmit={handleSubmit(submit)}>
      <Title variant='h4'>{translate('confirmAccount.title')}</Title>
      <SubTitle variant='body1'>
        {translate('confirmAccount.subtitle')}
      </SubTitle>

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
        placeholder={translate('login.confirmPassword')}
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
      {translate('confirmAccount.btnText')}
      <SubmitButton {...{ isLoading }} type='submit'>
        {translate('confirmAccount.btnText')}
      </SubmitButton>
    </Container>
  );
};
