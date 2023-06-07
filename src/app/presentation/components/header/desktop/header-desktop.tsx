import { ContainerGrid, TextButton } from '../../';
import { LogoSkyTechWhite } from '../../icons';
import {
  HeaderContainer,
  Container,
  ButtonBox,
  Content
} from './header-desktop-styles';

const HeaderDesktop = () => {
  return (
    <HeaderContainer>
      <Container>
        <ContainerGrid>
          <Content>
            <LogoSkyTechWhite />

            <ButtonBox>
              <TextButton
                textBold
                buttonColor='white'
                title='Login'
                href='/login'
              />
              <TextButton
                textBold
                buttonColor='white'
                title='Cadastre-se'
                href='/register'
              />
            </ButtonBox>
          </Content>
        </ContainerGrid>
      </Container>
    </HeaderContainer>
  );
};

export default HeaderDesktop;
