import { Box, styled } from '@mui/material';

import { includesForwardProps } from '../../common/helpers/includes-forward-props';

interface Props {
  background?: string;
}

const ContainerProps = ['background', 'gap'];
export const ContainerGrid = styled(Box, {
  shouldForwardProp: (prop) =>
    includesForwardProps(prop as string, ContainerProps)
})<Props>(({ theme, background }) => ({
  width: '70%',
  maxWidth: 1240,
  margin: '0 auto',
  background: background,

  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: theme.spacing(2)
  }
}));

export default ContainerGrid;
