import { Typography, styled } from '@mui/material';
import { includesForwardProps } from '~/app/presentation/common/helpers';

type Props = {
  colorType: string | 'primary';
  toUpperCase?: boolean;
};

const TextPropsArray = ['colorType', 'toUpperCase'];
export const Text = styled(Typography, {
  shouldForwardProp: (prop) =>
    includesForwardProps(prop as string, TextPropsArray)
})<Props>(({ theme, colorType, toUpperCase }) => ({
  fontWeight: 'bold',
  fontSize: theme.typography.pxToRem(36),
  lineHeight: '40px',
  textTransform: toUpperCase ? 'uppercase' : 'none',
  color: colorType === 'primary' ? theme.palette.text.primary : colorType,
  [theme.breakpoints.down('md')]: {
    fontSize: theme.typography.pxToRem(24)
  }
}));
