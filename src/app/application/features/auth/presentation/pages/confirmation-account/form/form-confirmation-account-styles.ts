import { Box, Typography, styled } from '@mui/material';
import { BaseButton } from '~/app/application/shared/components';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  padding: theme.spacing(4)
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black
}));

export const SubmitButton = styled(BaseButton)(({ theme }) => ({
  color: theme.palette.common.white,
  alignSelf: 'center'
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black
}));
