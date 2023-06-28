import { Box, Typography, styled, Button } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: theme.spacing(2)
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black
}));

export const ForgotPasswordButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: 'initial'
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0, 3),
  height: 36,
  alignSelf: 'center'
}));
