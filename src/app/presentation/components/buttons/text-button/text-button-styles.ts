import {
  styled,
  Button as MuiButton,
  Typography,
  Link as MuiLink,
  Box
} from '@mui/material';
import { includesForwardProps } from '~/app/presentation/common/helpers';

type ButtonProps = {
  buttonColor?: 'primary' | 'white';
};

type TextProps = {
  textColor?: 'primary' | 'white';
  customTextColor?: string;
  textBold?: boolean;
};

export const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',
  position: 'relative',

  '&:hover > div': {
    maxWidth: '100%'
  }
}));

export const Line = styled('div')(({ theme }) => ({
  maxWidth: '0%',
  height: 3,
  background: theme.palette.primary.main,
  transition: '500ms'
}));

export const Button = styled(MuiButton, {
  shouldForwardProp: (prop) =>
    includesForwardProps(prop as string, ['buttonColor'])
})<ButtonProps>(({ buttonColor, theme }) => ({
  height: 35,
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 8,
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  '& > svg': {
    fill:
      buttonColor === 'white'
        ? theme.palette.common.white
        : theme.palette.primary.main
  }
}));

export const Text = styled(Typography, {
  shouldForwardProp: (prop) =>
    includesForwardProps(prop as string, [
      'textColor',
      'customTextColor',
      'textBold'
    ])
})<TextProps>(({ textColor, theme, customTextColor, textBold }) => {
  return {
    all: 'unset',
    cursor: 'pointer',
    textTransform: 'none',
    fontSize: theme.typography.pxToRem(16),
    fontWeight: textBold ? 'bold' : '300',
    color:
      customTextColor ??
      (textColor === 'white'
        ? theme.palette.common.white
        : theme.palette.primary.main)
  };
});
export const Link = styled(MuiLink, {
  shouldForwardProp: (prop) =>
    includesForwardProps(prop as string, ['textColor', 'customTextColor'])
})<TextProps>(({ textColor, theme, customTextColor }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  all: 'unset',
  cursor: 'pointer',
  textTransform: 'none',
  fontSize: theme.typography.pxToRem(16),
  fontWeight: 'bold',
  color:
    customTextColor ??
    (textColor === 'white'
      ? theme.palette.common.white
      : theme.palette.primary.main)
}));
