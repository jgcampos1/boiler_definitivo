import { useNavigate } from 'react-router';

import { ITEM_MENU } from '../../common/constants/general/items-menu';
import { Container, MenuItem, MenuItemText } from './menu-global-styles';

const MenuGlobal = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <Container>
      {ITEM_MENU.map((item, index) => (
        <MenuItem key={index} onClick={() => navigateTo(item.path)}>
          <>
            <item.icon />
            <MenuItemText variant='h3'>{item.title}</MenuItemText>
          </>
        </MenuItem>
      ))}
    </Container>
  );
};

export default MenuGlobal;
