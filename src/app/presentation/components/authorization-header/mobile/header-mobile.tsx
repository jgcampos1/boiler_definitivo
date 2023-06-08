import { useState } from 'react';

import { IconButton } from '@mui/material';
import { ITEM_MENU } from '~/app/presentation/common/constants/general/items-menu';
import {
  LogoSkyTechWhite,
  MenuIcon,
  CloseIcon
} from '~/app/presentation/components';

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
      <IconButton
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
            <IconButton
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
