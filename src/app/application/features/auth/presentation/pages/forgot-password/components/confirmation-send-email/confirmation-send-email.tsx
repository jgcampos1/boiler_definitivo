import { Box } from '@mui/material';
import { CheckIcon } from '~/app/application/shared/components';

import {
  Container,
  Title,
  SubTitle,
  ForgotPasswordButton
} from './confirmation-send-email-style';

interface Props {
  text: string;
  subtitle: string;
  returnToLoginBtn: string;
}
export const ConfirmationSendEmail = ({
  returnToLoginBtn,
  subtitle,
  text
}: Props) => {
  return (
    <Container>
      <CheckIcon />
      <Box>
        <Title variant='h4'>{text}</Title>
        <SubTitle variant='body1'>{subtitle}</SubTitle>
      </Box>
      <ForgotPasswordButton type='button' variant='text' size='small' title=''>
        {returnToLoginBtn}
      </ForgotPasswordButton>
    </Container>
  );
};
