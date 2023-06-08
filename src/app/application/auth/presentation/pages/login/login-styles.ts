import { Box, styled, Typography } from '@mui/material';
import { BaseButton } from '~/app/presentation/components';

export const Content = styled(Box)(({ theme }) => ({
  background: 'white',
  border: '0.6px solid #E1E1E1',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  width: '90%',
  maxWidth: 560,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: theme.spacing(5),
  padding: theme.spacing(5),
  zIndex: 2,

  svg: {
    maxWidth: '50%'
  }
}));

export const Container = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: '100vh'
}));

export const Text = styled(Typography)(() => ({
  textAlign: 'center'
}));
export const Button = styled(BaseButton)(() => ({
  color: 'white'
}));
