import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useQuery } from '~/app/application/shared/hooks/use-query';
import { useTranslation } from '~/app/application/shared/hooks/use-translation';
import { ROUTES } from '~/app/main/types/routes-enum';

import { useResetPasswordMutation } from '../../../store/hooks';
import { ConfirmationSendEmail } from '../../components/confirmation-send-email/confirmation-send-email';
import { FormForgotPassword } from './components/form/form-reset-password';
import { resolver, FormResetPasswordType } from './components/form/validator';

export const ResetPassword = () => {
  const methods = useForm<FormResetPasswordType>({
    resolver,
    mode: 'onChange',
    reValidateMode: 'onChange'
  });
  const navigate = useNavigate();
  const [resetPassword, { isSuccess }] = useResetPasswordMutation();
  const { translate } = useTranslation('login');
  const handleLogin = ({ password }) => {
    resetPassword({ password, token });
  };
  const query = useQuery();
  const token = query.get('token');

  const navigateLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  useEffect(() => {
    if (!token) {
      return navigateLogin();
    }
  }, [token]);

  if (isSuccess) {
    return (
      <ConfirmationSendEmail
        subtitle={translate('successPasswordUpdate.subtitle')}
        text={translate('successPasswordUpdate.title')}
        returnToLoginBtn={{
          title: translate('successPasswordUpdate.returnToLoginBtn'),
          onClick: navigateLogin
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
