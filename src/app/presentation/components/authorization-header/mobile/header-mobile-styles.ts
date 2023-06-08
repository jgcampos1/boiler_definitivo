import { Box, styled, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';

export const HeaderContainerMobile = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(2, 4),
  background: theme.palette.secondary.main,

  '& >  svg': {
    width: 232.141
  }
}));
export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  width: '80%',
  flexShrink: 0,

  '& .MuiDrawer-paper': {
    width: '80%',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    padding: theme.spacing(2, 4),

    backgroundImage: 'url(/assets/img/banners/background-menu.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
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
  alignItems: 'center',
  height: '100%',
  padding: theme.spacing(5),
  background: theme.palette.primary.main
}));
export const ButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(3),
  justifyContent: 'center',
  flexDirection: 'column'
}));

export const ContainerItems = styled(Box)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),

  display: 'flex',
  flexDirection: 'column'
}));
export const MenuItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(1.25),
  padding: theme.spacing(0.5),
  borderRadius: 5,

  '& > svg': {
    width: '35px',
    height: '35px',
    '& > path': {
      fill: theme.palette.common.white
    }
  },

  '&:hover': {
    background: theme.palette.primary.light
  }
}));

export const MenuItemText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 500
}));
