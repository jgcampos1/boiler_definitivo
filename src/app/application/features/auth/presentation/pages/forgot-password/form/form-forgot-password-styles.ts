import { Box, Typography, styled, Button } from '@mui/material';

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

export const SubmitButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(0, 3),
  height: 36,
  alignSelf: 'center'
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.black
}));
