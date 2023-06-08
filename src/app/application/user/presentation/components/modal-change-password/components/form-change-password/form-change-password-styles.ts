import { styled, Box, Typography } from '@mui/material';
import { BaseButton } from '~/app/presentation/components';
import Colors from '~/app/presentation/styles/colors';

export const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(4, 0),
  flexDirection: 'column',
  gap: theme.spacing(3),
  background: 'white',
  minWidth: '560px',
  width: '100%',

  [theme.breakpoints.down('sm')]: {
    minWidth: 'auto'
  }
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

export const ButtonContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: theme.spacing(1, 'auto'),
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: theme.spacing(1)
}));
export const ConfirmButton = styled(BaseButton)(({ theme }) => ({
  padding: theme.spacing(1),
  color: theme.palette.common.white,
  fontWeight: 'bold'
}));

export const CancelButton = styled(BaseButton)(({ theme }) => ({
  padding: theme.spacing(1),
  color: Colors.Secondary,
  background: Colors.GrayLine,
  '&:hover': {
    background: Colors.Blue1Additional
  }
}));
