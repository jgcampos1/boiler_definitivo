import { FormProvider, useForm } from 'react-hook-form';

import { useTranslation } from '~/app/application/shared/hooks/use-translation';

import { useRecoveryPasswordMutation } from '../../../store/hooks';
import { ConfirmationSendEmail } from './components/confirmation-send-email/confirmation-send-email';
import { FormForgotPassword } from './components/form/form-forgot-password';

export const ForgotPassword = () => {
  const [recoveryPassword, { isSuccess }] = useRecoveryPasswordMutation();
  const methods = useForm();
  const { translate } = useTranslation('login');

  const handleLogin = (value) => {
    recoveryPassword(value);
  };

  if (isSuccess) {
    return (
      <ConfirmationSendEmail
        subtitle={translate('recoveryEmailSent.subtitle')}
        text={translate('recoveryEmailSent.title')}
        returnToLoginBtn={translate('recoveryEmailSent.returnToLoginBtn')}
      />
    );
  }
  return (
    <FormProvider {...methods}>
      <FormForgotPassword submit={handleLogin} />
    </FormProvider>
  );
};
