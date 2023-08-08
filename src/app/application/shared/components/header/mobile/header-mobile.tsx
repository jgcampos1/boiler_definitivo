import { useState } from 'react';

import { TextButton } from '../../buttons';
import {
  LogoContainer,
  CustomDrawer,
  HeaderContainer,
  ButtonBox,
  Container,
  IconButtonStyles
} from './header-mobile-styles';

const HeaderMobile = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <HeaderContainer>
      logo
      <IconButtonStyles
        icon={<>menu</>}
        onClick={() => {
          setOpenMenu(true);
        }}
      />
      <CustomDrawer
        open={openMenu}
        anchor='right'
        onClose={() => {
          setOpenMenu(false);
        }}
      >
        <Container>
          <LogoContainer>
            <IconButtonStyles
              icon={<>x</>}
              onClick={() => {
                setOpenMenu(false);
              }}
            />
            logo
          </LogoContainer>
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

            <TextButton
              textBold
              buttonColor='white'
              title='Ajuda'
              href='https://api.whatsapp.com/send?phone=5511911246997&text=Ol%C3%A1%20Pic%20Envios!'
            />
          </ButtonBox>
        </Container>
      </CustomDrawer>
    </HeaderContainer>
  );
};

export default HeaderMobile;
