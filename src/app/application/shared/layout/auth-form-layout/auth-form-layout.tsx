import { ReactNode } from 'react';

import {
  BackgroundImage,
  Container,
  Content,
  DescriptionBackground,
  ContainerForm,
  TitleBackground,
  BoxTextBackground,
  LogoContainer
} from './auth-form-layout-styles';

interface Props {
  children: ReactNode;
}
const AuthFormLayout = ({ children }: Props) => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src='./public/assets/logo/text-logo.svg' />
        </LogoContainer>

        <ContainerForm>{children}</ContainerForm>
      </Content>
      <BackgroundImage>
        <BoxTextBackground>
          <TitleBackground variant='h2'>Beta CRM</TitleBackground>
          <DescriptionBackground variant='body1'>
            Lorem ipsum dolor sit amet consectetur. Aenean vestibulum molestie
            eget convallis imperdiet fermentum. Ullamcorper tellus sagittis
            lorem tellus risus auctor cursus phasellus. Turpis mollis ac etiam
            in augue. A enim tincidunt sapien malesuada tincidunt.
          </DescriptionBackground>
        </BoxTextBackground>
      </BackgroundImage>
    </Container>
  );
};

export default AuthFormLayout;
