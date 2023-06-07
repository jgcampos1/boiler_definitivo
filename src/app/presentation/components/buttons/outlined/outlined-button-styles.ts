import {
  styled,
  Button as MuiButton,
  Typography,
  Link as MuiLink
} from '@mui/material';
import { includesForwardProps } from '~/app/presentation/common/helpers';

type ButtonProps = {
  buttonColor: 'primary' | 'white';
};

type TextProps = {
  textColor?: 'primary' | 'white';
  customTextColor?: string;
};

export const Link = styled(MuiLink)(() => ({
  display: 'inline-block',
  textDecoration: 'none'
}));

export const Button = styled(MuiButton, {
  shouldForwardProp: (prop) =>
    includesForwardProps(prop as string, ['buttonColor'])
})<ButtonProps>(({ buttonColor, theme }) => ({
  height: 35,
  border: `1px solid ${
    buttonColor === 'white'
      ? theme.palette.common.white
      : theme.palette.primary.dark
  }`,
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 0
}));

export const Text = styled(Typography, {
  shouldForwardProp: (prop) =>
    includesForwardProps(prop as string, ['textColor', 'customTextColor'])
})<TextProps>(({ textColor, theme, customTextColor }) => {
  return {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: 500,
    color:
      customTextColor ??
      (textColor === 'white'
        ? theme.palette.common.white
        : theme.palette.common.black)
  };
});
