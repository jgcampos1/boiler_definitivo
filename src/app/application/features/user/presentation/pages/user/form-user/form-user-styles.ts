import { styled, Box, Typography } from '@mui/material';
import { BaseButton } from '~/app/application/shared/components';
import Colors from '~/app/application/shared/styles/colors';

export const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(4, 0),
  flexDirection: 'column',
  background: 'white'
}));

export const InputContent = styled(Box)(({ theme }) => ({
  borderBottom: `solid 1px ${Colors.GrayLine}`,
  margin: theme.spacing(2, 0)
}));
export const FieldInput = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: theme.spacing(2, 0),
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'flex-start',

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}));

export const TitleForm = styled(Typography)(() => ({
  color: Colors.Primary,
  margin: 0
}));

export const Button = styled(BaseButton)(({ theme }) => ({
  padding: theme.spacing(1),
  width: '70%',
  margin: theme.spacing(1, 'auto'),
  color: theme.palette.common.white,
  fontWeight: 'bold'
}));
