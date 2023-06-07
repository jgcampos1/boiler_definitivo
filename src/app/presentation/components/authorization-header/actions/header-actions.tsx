import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';

import { useLazyGetUserProfileQuery } from '~/app/application/user/store';
import { ROUTES } from '~/app/main/types';
import { useAuth } from '~/app/presentation/hooks';
import { theme } from '~/app/presentation/styles/theme';

import { EyeVisibilityIcon, LogoutIcon, MoreOption } from '../../';
import MoreOptionMenuItem from '../../more-option-menu-item/more-option-menu-item';
import {
  Container,
  IconProfile,
  MoreOptionMenuItemLogOut,
  TagRole
} from './header-actions-styles';

export const HeaderActions = () => {
  const navigate = useNavigate();
  const { logout, user: userAuth } = useAuth();

  const [loadUser, { data: user }] = useLazyGetUserProfileQuery();

  useEffect(() => {
    loadUser({ id: userAuth?.userId });
  }, [userAuth]);

  const roleName = useMemo(() => {
    return userAuth?.roles[0]?.name;
  }, [userAuth?.roles]);
  const username = user?.firstName || 'Usuário';

  const redirectUserPage = () => navigate(`${ROUTES.USER}`);

  return (
    <Container>
      <MoreOption
        labelButton={username}
        icon={<IconProfile />}
        textColor={theme.palette.common.white}
      >
        <MoreOptionMenuItem
          title='Ver perfil'
          icon={<EyeVisibilityIcon />}
          onClick={redirectUserPage}
        />
        <MoreOptionMenuItemLogOut
          title='logout'
          icon={<LogoutIcon />}
          onClick={() => {
            logout();
          }}
        />
      </MoreOption>
      <TagRole>{roleName}</TagRole>
    </Container>
  );
};
