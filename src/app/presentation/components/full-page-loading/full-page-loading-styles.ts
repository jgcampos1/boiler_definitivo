import { styled, Box, CircularProgress } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const Spinner = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main
}));
