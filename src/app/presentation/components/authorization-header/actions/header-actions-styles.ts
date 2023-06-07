import { Box, styled, Typography } from '@mui/material';

import { ProfileIcon } from '../../icons';
import MoreOptionMenuItem from '../../more-option-menu-item/more-option-menu-item';

export const Container = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const TagRole = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0.5, 1.25),
  textTransform: 'uppercase',
  color: theme.palette.primary.main,
  borderRadius: 5,
  background: theme.palette.common.white,
  fontWeight: 'bold'
}));

export const IconProfile = styled(ProfileIcon)(({ theme }) => ({
  fill: theme.palette.common.white,
  width: 30,
  height: 30
}));

export const MoreOptionMenuItemLogOut = styled(MoreOptionMenuItem)(
  ({ theme }) => ({
    borderTop: `1px solid ${theme.palette.common.white}`,
    borderRadius: 0,
    color: theme.palette.common.white,
    '& > svg': {
      fill: theme.palette.common.white,
      width: 20,
      height: 20
    },

    '&:hover': {
      color: theme.palette.secondary.light,
      svg: {
        width: 25,
        height: 25
      }
    }
  })
);
