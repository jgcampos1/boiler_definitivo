import { TextButton } from '../../buttons';
import ContainerGrid from '../../container-grid/container-grid';
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
            Logo
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
