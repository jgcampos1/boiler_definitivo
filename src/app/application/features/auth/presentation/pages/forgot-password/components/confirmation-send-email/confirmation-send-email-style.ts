import { Box, Typography, styled } from '@mui/material';
import { TextButton } from '~/app/application/shared/components';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  padding: theme.spacing(4)
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black
}));

export const ForgotPasswordButton = styled(TextButton)(({ theme }) => ({
  '& > button > p': {
    color: theme.palette.primary.main,
    letterSpacing: '1.25px',
    textTransform: 'uppercase',
    fontSize: theme.typography.pxToRem(14)
  }
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black
}));
