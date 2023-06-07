import { ReactNode } from 'react';

import { AuthorizationHeader } from '../../components';
import MenuGlobal from '../../components/menu-global/menu-global';
import { useDeviceSizes } from '../../hooks';
import { Container, Content, MenuContent } from './default-layout-styles';

type Props = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
  const { isMobile } = useDeviceSizes();
  return (
    <Container>
      <AuthorizationHeader />
      <MenuContent>
        {!isMobile && <MenuGlobal />}
        <Content>{children}</Content>
      </MenuContent>
    </Container>
  );
};

export default DefaultLayout;
