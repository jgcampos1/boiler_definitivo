import { Box, styled } from '@mui/material';

import Colors from '../../styles/colors';

export const Container = styled(Box)(({ theme }) => ({
  width: '100vw',
  background: Colors.BgGray,
  minHeight: '100vh',
  paddingTop: 130,
  maxHeight: '100vh',
  overflow: 'hidden',

  [theme.breakpoints.down('sm')]: {
    paddingTop: 0
  }
}));

export const MenuContent = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
}));
export const Content = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(5),
  overflowY: 'scroll',
  height: '90vh'
}));
