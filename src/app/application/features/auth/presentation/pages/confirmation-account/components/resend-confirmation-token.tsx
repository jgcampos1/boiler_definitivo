import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { ToastType } from '~/app/application/shared/common/types/toast-types';
import { useQuery } from '~/app/application/shared/hooks/use-query';
import { useToast } from '~/app/application/shared/hooks/use-toast';
import { useTranslation } from '~/app/application/shared/hooks/use-translation';
import { tokenDecoder } from '~/app/core/infra/decoder/jwt-token-decoder';
import { ROUTES } from '~/app/main/types/routes-enum';

import { useSendConfirmationEmailMutation } from '../../../../store/hooks';
import {
  Title,
  SubTitle,
  SubmitButton,
  Container
} from './resend-confirmation-token-styles';
export const ResendConfirmationToken = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();

  const { translate } = useTranslation('login');
  const query = useQuery();
  const token = query.get('token');

  const [sendConfirmationEmail, { isSuccess, isLoading }] =
    useSendConfirmationEmailMutation();
  const handleButton = () => {
    const { email } = tokenDecoder.decode<{ email }>(token);
    sendConfirmationEmail({ email });
  };

  useEffect(() => {
    if (isSuccess) {
      addToast({
        type: ToastType.SUCCESS,
        text: translate('resendEmail.success')
      });

      navigate(ROUTES.LOGIN);
    }
  }, [isSuccess]);

  return (
    <Container>
      <Title variant='h4'>{translate('resendEmail.title')}</Title>
      <SubTitle variant='body1'>{translate('resendEmail.subtitle')}</SubTitle>

      <SubmitButton
        variant='contained'
        type='submit'
        onClick={handleButton}
        {...{ isLoading }}
      >
        {translate('resendEmail.btnText')}
      </SubmitButton>
    </Container>
  );
};
