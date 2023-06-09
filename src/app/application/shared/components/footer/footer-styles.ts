import { Box, styled, Typography } from '@mui/material';

import Colors from '../../styles/colors';

export const Container = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(3),
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: Colors.BackgroundFooter,

  gap: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    padding: '1rem 1.5rem',
    flexDirection: 'column'
  }
}));

export const UlContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'center',
  color: theme.palette.common.white,
  background: Colors.BackgroundFooter,

  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    padding: '1rem 1.5rem',
    alignItems: 'center'
  },

  '& > li': {
    listStyleType: 'none'
  }
}));
export const Icons = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 20,
  paddingRight: 20
}));

export const CnpjContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  background: theme.palette.primary.main,
  padding: theme.spacing(2, 0)
}));

export const CnpjText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontSize: theme.typography.body2.fontSize
}));
