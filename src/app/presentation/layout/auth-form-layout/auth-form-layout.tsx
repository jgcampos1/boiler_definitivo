import { ReactNode } from 'react';

import { Container } from './auth-form-layout-styles';

interface Props {
  children: ReactNode;
}
const AuthFormLayout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default AuthFormLayout;
