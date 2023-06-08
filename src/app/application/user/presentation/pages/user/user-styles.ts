import { styled, Box, Typography } from '@mui/material';
import { BaseButton } from '~/app/presentation/components';

export const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  background: 'white'
}));

export const Title = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(4, 0)
}));

export const TitleContent = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

export const ButtonEdit = styled(BaseButton)(({ theme }) => ({
  color: theme.palette.common.white,
  '& > svg': {
    fill: theme.palette.common.white
  }
}));
