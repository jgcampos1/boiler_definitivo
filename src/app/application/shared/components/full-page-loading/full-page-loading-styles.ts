import { styled, Box, CircularProgress } from '@mui/material';

export const Container = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const Spinner = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main
}));
