import type { TypographyProps } from '@mui/material';

import { Text } from './title-text-styles';

type Props = TypographyProps & {
  children: React.ReactNode;
  colorType?: 'light' | 'dark';
  style?: React.CSSProperties;
  maxWidth?: number;
  toUpperCase?: boolean;
};

const TitleText = ({
  children,
  colorType = 'dark',
  toUpperCase,
  ...props
}: Props) => {
  return (
    <Text {...props} {...{ toUpperCase, colorType }}>
      {children}
    </Text>
  );
};

export default TitleText;
