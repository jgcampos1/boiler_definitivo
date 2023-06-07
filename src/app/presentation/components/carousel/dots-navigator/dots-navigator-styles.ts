import { styled } from '@mui/material';

export const DotsList = styled('ul')(() => ({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row'
}));

export const DotsItem = styled('li')(() => ({
  width: 25,
  height: 25,
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center'
}));

export const ActiveCircleOut = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  border: `1px solid ${theme.palette.primary.dark}`,
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  width: 15,
  height: 15,
  borderRadius: '50%'
}));

export const ActiveCircleIn = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  width: 5,
  height: 5,
  borderRadius: '50%'
}));

export const InactiveCircle = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  backgroundColor: theme.palette.grey[300],
  width: 10,
  height: 10,
  borderRadius: '50%'
}));
