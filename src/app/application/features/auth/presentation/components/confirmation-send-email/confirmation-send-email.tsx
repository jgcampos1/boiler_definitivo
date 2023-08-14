import { Box } from '@mui/material';
import { CheckIcon } from '~/app/application/shared/components';
import { TextButtonProps } from '~/app/application/shared/components/buttons/text-button/text-button';

import {
  Container,
  Title,
  SubTitle,
  ForgotPasswordButton
} from './confirmation-send-email-style';

interface Props {
  text: string;
  subtitle: string;
  returnToLoginBtn: TextButtonProps;
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
      <ForgotPasswordButton {...returnToLoginBtn} />
    </Container>
  );
};
