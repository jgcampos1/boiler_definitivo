import { styled, Box, Typography } from '@mui/material';
import { BaseButton } from '~/app/presentation/components';
import Colors from '~/app/presentation/styles/colors';

export const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(4)
}));
export const TitleForm = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(32),
  color: Colors.Secondary
}));

export const Button = styled(BaseButton)(({ theme }) => ({
  padding: theme.spacing(1),
  width: '70%',
  margin: theme.spacing(1, 'auto'),
  color: theme.palette.common.white,
  fontWeight: 'bold'
}));
