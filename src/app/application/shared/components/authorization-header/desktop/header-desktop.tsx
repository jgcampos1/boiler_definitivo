import {
  ContainerGrid,
  LogoSkyTechWhite
} from '~/app/application/shared/components';

import { HeaderActions } from '../actions/header-actions';
import { HeaderContainer, Container, Content } from './header-desktop-styles';
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
