import { useDeviceSizes } from '~/app/application/shared/hooks/use-device-sizes';

import HeaderDesktop from './desktop/header-desktop';
import HeaderMobile from './mobile/header-mobile';

export const AuthorizationHeader = () => {
  const { isMobile } = useDeviceSizes();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};
