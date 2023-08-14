import { FormProvider, useForm } from 'react-hook-form';
import { Navigate, useParams } from 'react-router-dom';

import { useTranslation } from '~/app/application/shared/hooks/use-translation';

import { useResetPasswordMutation } from '../../../store/hooks';
import { ConfirmationSendEmail } from '../forgot-password/components/confirmation-send-email/confirmation-send-email';
import { FormForgotPassword } from './components/form/form-reset-password';

export const ResetPassword = () => {
  const [resetPassword, { isSuccess }] = useResetPasswordMutation();
  const methods = useForm();
  const { translate } = useTranslation('login');
  const handleLogin = ({ password }) => {
    resetPassword({ password, token });
  };
  const { token } = useParams<{ token: string }>();
  if (!token) {
    Navigate({ to: '/login' });
  }

  if (isSuccess) {
    return (
      <ConfirmationSendEmail
        subtitle={translate('successPasswordUpdate.subtitle')}
        text={translate('successPasswordUpdate.title')}
        returnToLoginBtn={translate('successPasswordUpdate.returnToLoginBtn')}
      />
    );
  }
  return (
    <FormProvider {...methods}>
      <FormForgotPassword submit={handleLogin} />
    </FormProvider>
  );
};
