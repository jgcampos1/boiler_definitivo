import { Box, styled } from '@mui/material';

export const HeaderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'fixed',
  justifyContent: 'space-between',
  maxHeight: 150,
  top: 0,
  background: theme.palette.primary.dark,
  zIndex: 999
}));
export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  maxHeight: 150,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: theme.palette.primary.main
}));

export const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${theme.spacing(2)} 0`,

  '& >  svg': {
    width: 232
  }
}));

export const ButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  gap: theme.spacing(2)
}));
