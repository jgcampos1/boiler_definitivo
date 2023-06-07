import { useNavigate } from 'react-router';

import { useRecoveryPasswordMutation } from '~/app/application/auth/store/hooks';
import { ROUTES } from '~/app/main/types';

import { ArrowPrev, LogoSkyTech } from '../../components';
import { useToastAlert } from '../../hooks';
import FormLogin from './form-recovery-password/form-recovery-password';
import { FormRecoveryPasswordValidationSchema } from './form-recovery-password/form-validation';
import {
  BackPageButton,
  BoxLogo,
  Container,
  Description,
  TitleForm
} from './recovery-password-styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
const resolver = zodResolver(FormRecoveryPasswordValidationSchema);
const RecoveryPassword = () => {
  const methods = useForm({ resolver, mode: 'onSubmit' });
  const navigate = useNavigate();

  const [recoveryPassword, { isError, isSuccess, error, isLoading }] =
    useRecoveryPasswordMutation();

  const handleRecoveryPassword = (values) => {
    recoveryPassword({ email: values?.email });
  };

  const redirect = () => navigate(ROUTES.LOGIN);

  useToastAlert({
    error: error,
    isError: isError
  });

  useToastAlert({
    isSuccess: isSuccess,
    successMessage: 'Email de recuperação enviado, por favor verifique o email',
    onSuccess: () => redirect()
  });
  return (
    <Container>
      <BackPageButton href={ROUTES.LOGIN} title='voltar' icon={<ArrowPrev />} />
      <BoxLogo>
        <LogoSkyTech />
      </BoxLogo>
      <TitleForm variant='h1'>Recuperar Senha</TitleForm>
      <Description variant='body2'>
        insira o email da conta que deseja recuperar
      </Description>

      <FormProvider {...methods}>
        <FormLogin onSubmit={handleRecoveryPassword} {...{ isLoading }} />
      </FormProvider>
    </Container>
  );
};

export default RecoveryPassword;
