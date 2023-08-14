import { styled, Button as MuiButton } from '@mui/material';

export const Button = styled(MuiButton)(({ theme }) => ({
  padding: theme.spacing(0, 3),
  height: 36,
  fontSize: theme.typography.pxToRem(14),
  fontFamily: theme.typography.fontFamily
}));
