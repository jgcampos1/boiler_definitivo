import { Box, Typography, styled, Button } from '@mui/material';

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

export const ForgotPasswordButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  letterSpacing: '1.25px',
  textTransform: 'uppercase'
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black
}));
