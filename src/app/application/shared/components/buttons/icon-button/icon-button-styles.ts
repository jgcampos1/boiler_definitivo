import {
  styled,
  Button as MuiButton,
  Box,
  Link as MuiLink
} from '@mui/material';
import { includesForwardProps } from '~/app/application/shared/common/helpers/includes-forward-props';

type ButtonProps = {
  iconColor?: 'primary' | 'white';
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

export const Button = styled(MuiButton, {
  shouldForwardProp: (prop) =>
    includesForwardProps(prop as string, ['iconColor'])
})<ButtonProps>(({ iconColor, theme }) => ({
  height: 35,
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 5,
  '& > svg': {
    fill:
      iconColor === 'white'
        ? theme.palette.common.white
        : theme.palette.primary.main
  }
}));

type TextProps = {
  textColor?: 'primary' | 'white';
  customTextColor?: string;
  textBold?: boolean;
};

export const Link = styled(MuiLink, {
  shouldForwardProp: (prop) =>
    includesForwardProps(prop as string, ['textColor', 'customTextColor'])
})<TextProps>(({ textColor, theme, customTextColor }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  all: 'unset',
  cursor: 'pointer',
  fontSize: theme.typography.pxToRem(16),
  fontWeight: 'bold',
  color:
    customTextColor ??
    (textColor === 'white'
      ? theme.palette.common.white
      : theme.palette.primary.main)
}));
