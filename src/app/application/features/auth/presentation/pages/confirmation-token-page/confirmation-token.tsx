import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import {
  useConfirmationTokenMutation,
  useSendConfirmationEmailMutation
} from '~/app/application/features/auth/store/hooks';
import { ToastType } from '~/app/application/shared/common/types/toast-types';
import { FullPageLoading } from '~/app/application/shared/components';
import { LogoSkyTech } from '~/app/application/shared/components/icons/';
import { useQuery } from '~/app/application/shared/hooks/use-query';
import { useToast } from '~/app/application/shared/hooks/use-toast';
import { HttpErrorsType } from '~/app/core/application/protocols/http-client';
import { tokenDecoder } from '~/app/core/infra/decoder/jwt-token-decoder';
import { ROUTES } from '~/app/main/types/routes-enum';

import { Button, Container, Content, Text } from './confirmation-token-styles';

const ConfirmationToken = () => {
  const { addToast } = useToast();
  const navigate = useNavigate();
  const [confirmationToken, { isLoading, error }] =
    useConfirmationTokenMutation();

  const [sendConfirmationEmail, { data: dataSendConfirmationEmail }] =
    useSendConfirmationEmailMutation();
  const query = useQuery();
  const token = query.get('token');

  const handleButton = () => {
    const { email } = tokenDecoder.decode<{ email }>(token);
    sendConfirmationEmail({ email });
  };

  useEffect(() => {
    confirmationToken({ token })
      .unwrap()
      .then(() => {
        addToast({
          type: ToastType.SUCCESS,
          text: 'Email confirmado, agora você pode fazer o login'
        });

        navigate(ROUTES.LOGIN);
      });
  }, [token]);

  useEffect(() => {
    if (!error) return;
    if (error?.code === HttpErrorsType.INVALID_TOKEN) {
      addToast({
        type: ToastType.ERROR,
        text: error.message
      });
      navigate(ROUTES.LOGIN);
    }
    if (error?.code === HttpErrorsType.EXPIRATION_INVALID) {
      addToast({
        type: ToastType.ERROR,
        text: error.message
      });
    }
  }, [error]);

  useEffect(() => {
    if (dataSendConfirmationEmail?.success) {
      addToast({
        type: ToastType.SUCCESS,
        text: 'Email enviado, por favor verifique sua caixa de email'
      });

      navigate(ROUTES.LOGIN);
    }
  }, [dataSendConfirmationEmail]);

  if (isLoading) return <FullPageLoading />;

  return (
    <Container>
      {error?.code === HttpErrorsType.EXPIRATION_INVALID && (
        <Content>
          <LogoSkyTech />
          <Text>O token de confirmação expirou, deseja reenviar o codigo?</Text>
          <Button onClick={() => handleButton()}>Reenviar email</Button>
        </Content>
      )}
    </Container>
  );
};

export default ConfirmationToken;
