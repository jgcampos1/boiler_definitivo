import { useState } from 'react';

import { ITEM_MENU } from '~/app/application/shared/common/constants/general/items-menu';
import {
  LogoSkyTechWhite,
  MenuIcon,
  CloseIcon
} from '~/app/application/shared/components';

import { IconButtonStyles } from '../../header/mobile/header-mobile-styles';
import { HeaderActions } from '../actions/header-actions';
import {
  LogoContainer,
  CustomDrawer,
  HeaderContainerMobile,
  Container,
  ContainerItems,
  MenuItem,
  MenuItemText
} from './header-mobile-styles';

const HeaderMobile = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <HeaderContainerMobile>
      <LogoSkyTechWhite />
      <IconButtonStyles
        icon={<MenuIcon />}
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
              icon={<CloseIcon />}
              onClick={() => {
                setOpenMenu(false);
              }}
            />
            <LogoSkyTechWhite />
          </LogoContainer>

          <HeaderActions />

          <ContainerItems>
            {ITEM_MENU.map((item, index) => (
              <MenuItem key={index}>
                <>
                  <item.icon />
                  <MenuItemText variant='h3'>{item.title}</MenuItemText>
                </>
              </MenuItem>
            ))}
          </ContainerItems>
        </Container>
      </CustomDrawer>
    </HeaderContainerMobile>
  );
};

export default HeaderMobile;
