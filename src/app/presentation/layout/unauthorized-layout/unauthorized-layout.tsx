import { ReactNode } from 'react';

import { Container } from './unauthorized-layout-styles';

type Props = {
  children: ReactNode;
};

const UnauthorizedLayout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default UnauthorizedLayout;
