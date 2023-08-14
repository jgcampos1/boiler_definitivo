import { useFormContext } from 'react-hook-form';

import { TextInput } from '~/app/application/shared/components';
import { useTranslation } from '~/app/application/shared/hooks/use-translation';

import {
  Container,
  SubTitle,
  SubmitButton,
  Title
} from './form-forgot-password-styles';

interface Props {
  submit: (value: any) => void;
}

export const FormForgotPassword = ({ submit }: Props) => {
  const { translate } = useTranslation('login');
  const { handleSubmit } = useFormContext();
  return (
    <Container component='form' onSubmit={handleSubmit(submit)}>
      <Title variant='h4'>{translate('forgotPassword.title')}</Title>
      <SubTitle variant='body1'>
        {translate('forgotPassword.subtitle')}
      </SubTitle>
      <TextInput
        name='email'
        placeholder={translate('forgotPassword.email')}
        size='small'
        type='email'
      />

      <SubmitButton variant='contained' type='submit'>
        {translate('forgotPassword.resetBtnText')}
      </SubmitButton>
    </Container>
  );
};
