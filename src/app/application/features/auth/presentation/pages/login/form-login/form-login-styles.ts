import { styled, Link as LinkMui, Box, Typography } from '@mui/material';
import { BaseButton, TextButton } from '~/app/application/shared/components';
import Colors from '~/app/application/shared/styles/colors';

export const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(4),
  background: 'white',
  border: '0.6px solid #E1E1E1',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  gap: theme.spacing(2),
  width: '70%',
  maxWidth: 560,
  maxHeight: '100vh',
  overflowY: 'auto',
  zIndex: 2,

  [theme.breakpoints.down('lg')]: {
    width: '90%',
    height: 'min-content',
    maxHeight: '90%',
    gap: theme.spacing(0.5)
  }
}));

export const BoxLogo = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));
export const TitleForm = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(32),
  color: Colors.Secondary
}));
export const Link = styled(LinkMui)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.pxToRem(18),
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  fontWeight: 'bold',
  '& > svg': {
    width: 50,
    color: Colors.Secondary
  }
}));
export const BackPageButton = styled(TextButton)(({ theme }) => ({
  maxWidth: '20%',
  margin: '0 auto 0 0',
  [theme.breakpoints.down('md')]: {
    maxWidth: 'auto'
  }
}));

export const ForgotPasswordButton = styled(TextButton)(({ theme }) => ({
  width: '100%',
  maxWidth: '50%',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    maxWidth: '80%'
  }
}));

export const Button = styled(BaseButton)(({ theme }) => ({
  padding: theme.spacing(1),
  width: '70%',
  margin: theme.spacing(1, 'auto'),
  color: theme.palette.common.white,
  fontWeight: 'bold'
}));
