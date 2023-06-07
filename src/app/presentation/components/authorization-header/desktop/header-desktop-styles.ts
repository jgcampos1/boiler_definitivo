import { Box, styled } from '@mui/material';

export const HeaderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  justifyContent: 'space-between',
  background: theme.palette.primary.main,

  height: 130,
  top: 0,
  position: 'fixed',
  zIndex: 999
}));
export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(0, 1)
  }
}));

export const ContainerAction = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: 'min-content'
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
