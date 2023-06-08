import { useDeviceSizes } from '~/app/presentation/hooks/use-device-sizes';

import HeaderDesktop from './desktop/header-desktop';
import HeaderMobile from './mobile/header-mobile';

export const AuthorizationHeader = () => {
  const { isMobile } = useDeviceSizes();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};
