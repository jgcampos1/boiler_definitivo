import { Box, styled, Typography } from '@mui/material';
import { BaseButton } from '~/app/application/shared/components';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  background: 'transparent',
  gap: theme.spacing(3),
  justifyContent: 'center',
  flexDirection: 'column'
}));

export const WellComeTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: 400,
  color: theme.palette.secondary.light,
  strong: {
    color: theme.palette.primary.main,
    fontWeight: 700
  }
}));
export const Button = styled(BaseButton)(() => ({
  color: 'white'
}));

export const GridOptions = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  padding: theme.spacing(2),
  gap: theme.spacing(2),

  justifyItems: 'center',
  alignItems: 'center',

  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.25)
  }
}));
export const OptionContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '300px',
  borderRadius: '5px',
  gap: theme.spacing(2),
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.common.white,
  padding: theme.spacing(3),
  transition: '500ms',

  '& > svg': {
    width: '45px',
    height: '45px'
  },
  '&:hover': {
    background: theme.palette.primary.light,
    cursor: 'pointer',
    color: theme.palette.common.white,
    '& > .MuiBox-root >  h3': {
      color: theme.palette.common.white
    },
    '& > svg > path': {
      fill: theme.palette.common.white
    }
  }
}));
export const TitleContentOption = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: theme.spacing(0.5)
}));
export const DescriptionOption = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(24)
}));
export const TitleOption = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(32),
  lineHeight: '0.8',
  color: theme.palette.primary.light
}));
