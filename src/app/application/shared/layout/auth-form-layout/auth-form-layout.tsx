import { ReactNode } from 'react';

import { useTranslation } from '../../hooks/use-translation';
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
  const { translate } = useTranslation('login');
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
          <TitleBackground variant='h2'>
            {translate('background.title')}
          </TitleBackground>
          <DescriptionBackground variant='body1'>
            {translate('background.text')}
          </DescriptionBackground>
        </BoxTextBackground>
      </BackgroundImage>
    </Container>
  );
};

export default AuthFormLayout;
