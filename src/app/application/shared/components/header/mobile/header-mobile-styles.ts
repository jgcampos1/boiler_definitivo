import { Box, styled } from '@mui/material';
import Drawer from '@mui/material/Drawer';

import { IconButton } from '../../buttons';

export const HeaderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  background: theme.palette.primary.main,
  '& >  svg': {
    width: 232.141
  }
}));
export const IconButtonStyles = styled(IconButton)(({ theme }) => ({
  background: theme.palette.common.white,

  '&:hover': {
    background: theme.palette.primary.dark
  }
}));
export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  width: '80%',
  flexShrink: 0,

  '& .MuiDrawer-paper': {
    background: theme.palette.primary.main,
    width: '80%'
  }
}));

export const LogoContainer = styled(Box)(() => ({
  '& >  svg': {
    width: 232.141
  },
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row'
}));
export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  gap: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: theme.spacing(5)
}));
export const ButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(3),
  justifyContent: 'center',
  flexDirection: 'column'
}));
