import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';

import { useLazyGetUserProfileQuery } from '~/app/application/features/user/store/hooks';
import {
  MoreOption,
  EyeVisibilityIcon,
  LogoutIcon
} from '~/app/application/shared/components';
import MoreOptionMenuItem from '~/app/application/shared/components/more-option-menu-item/more-option-menu-item';
import { useAuth } from '~/app/application/shared/hooks/use-auth';
import { theme } from '~/app/application/shared/styles/theme';
import { ROUTES } from '~/app/main/types/routes-enum';

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
