import { ContainerGrid, LogoSkyTechWhite } from '~/app/presentation/components';
import { HeaderContainer } from '~/app/presentation/components/authorization-header/desktop/header-desktop-styles';
import { Content } from '~/app/presentation/layout/default-layout/default-layout-styles';

import { HeaderActions } from '../actions/header-actions';
import { Container } from '../actions/header-actions-styles';

const HeaderDesktop = () => {
  return (
    <HeaderContainer>
      <Container>
        <ContainerGrid>
          <Content>
            <LogoSkyTechWhite />
            <HeaderActions />
          </Content>
        </ContainerGrid>
      </Container>
    </HeaderContainer>
  );
};

export default HeaderDesktop;
