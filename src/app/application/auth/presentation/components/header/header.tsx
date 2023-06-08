import HeaderDesktop from '~/app/presentation/components/header/desktop/header-desktop';
import HeaderMobile from '~/app/presentation/components/header/mobile/header-mobile';
import { useDeviceSizes } from '~/app/presentation/hooks/use-device-sizes';

export const Header = () => {
  const { isMobile } = useDeviceSizes();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};
