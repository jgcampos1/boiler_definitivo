import { Box, styled, Typography } from '@mui/material';

import { BaseButton } from '../buttons';

export const Container = styled(Box)(({ theme }) => ({
  background: theme.palette.secondary.main,

  height: 'calc(100vh - 130px)',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  zIndex: 999,

  '&:hover': {
    '& > .MuiButtonBase-root > h3': {
      display: 'initial',
      gap: 0
    }
  }
}));

export const MenuItem = styled(BaseButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(1.25),
  padding: theme.spacing(0.5),
  borderRadius: 5,
  border: 'none',
  background: 'transparent',
  boxShadow: 'none',

  '& > svg ': {
    '& > path': {
      fill: theme.palette.common.white
    },
    width: '25px',
    height: '25px'
  },
  '&:hover': {
    background: 'transparent',

    '& > svg > path': {
      fill: theme.palette.common.white
    }
  }
}));

export const MenuItemText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 500,
  display: 'none'
}));
