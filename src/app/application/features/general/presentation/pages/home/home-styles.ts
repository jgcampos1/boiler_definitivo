import { Box, styled } from '@mui/material';

export const Container = styled(Box)(() => ({
  height: '100%'
}));

export const Content = styled(Box)(({ theme }) => ({
  marginTop: '150px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '0'
  }
}));
