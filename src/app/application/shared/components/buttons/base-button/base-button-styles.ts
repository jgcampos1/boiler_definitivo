import { styled, Button as MuiButton } from '@mui/material';

export const Button = styled(MuiButton)(({ theme }) => ({
  padding: theme.spacing(1, 3),
  fontSize: theme.typography.pxToRem(16),
  gap: theme.spacing(1),
  alignItems: 'center',
  color: 'white'
}));
