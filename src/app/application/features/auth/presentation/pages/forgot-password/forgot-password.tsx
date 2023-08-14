import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { useTranslation } from '~/app/application/shared/hooks/use-translation';
import { ROUTES } from '~/app/main/types/routes-enum';

import { useRecoveryPasswordMutation } from '../../../store/hooks';
import { ConfirmationSendEmail } from './components/confirmation-send-email/confirmation-send-email';
import { FormForgotPassword } from './components/form/form-forgot-password';
import { resolver } from './components/form/validator';

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [recoveryPassword, { isSuccess }] = useRecoveryPasswordMutation();
  const methods = useForm({ resolver });
  const { translate } = useTranslation('login');

  const handleLogin = (value) => {
    recoveryPassword(value);
  };

  if (isSuccess) {
    return (
      <ConfirmationSendEmail
        subtitle={translate('recoveryEmailSent.subtitle')}
        text={translate('recoveryEmailSent.title')}
        returnToLoginBtn={{
          title: translate('recoveryEmailSent.returnToLoginBtn'),
          onClick: () => {
            navigate(ROUTES.LOGIN);
          }
        }}
      />
    );
  }
  return (
    <FormProvider {...methods}>
      <FormForgotPassword submit={handleLogin} />
    </FormProvider>
  );
};
