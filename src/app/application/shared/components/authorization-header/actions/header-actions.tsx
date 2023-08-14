// import { useMemo } from 'react';
import { useNavigate } from 'react-router';

import { MoreOption } from '~/app/application/shared/components';
import MoreOptionMenuItem from '~/app/application/shared/components/more-option-menu-item/more-option-menu-item';
import { useAuth } from '~/app/application/shared/hooks/use-auth';
import { theme } from '~/app/application/shared/styles/theme';
import { ROUTES } from '~/app/main/types/routes-enum';

import {
  Container,
  IconProfile,
  MoreOptionMenuItemLogOut
  //   TagRole
} from './header-actions-styles';

export const HeaderActions = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  //   const roleName = useMemo(() => {
  //     return userAuth?.roles[0]?.name;
  //   }, [userAuth?.roles]);
  const username = 'user?.firstName' || 'Usuário';

  const redirectUserPage = () => navigate(`${ROUTES.HOME}`);

  return (
    <Container>
      <MoreOption
        labelButton={username}
        icon={<IconProfile />}
        textColor={theme.palette.common.white}
      >
        <MoreOptionMenuItem title='Ver perfil' onClick={redirectUserPage} />
        <MoreOptionMenuItemLogOut
          title='logout'
          onClick={() => {
            logout();
          }}
        />
      </MoreOption>
      {/* <TagRole>{roleName}</TagRole> */}
    </Container>
  );
};
