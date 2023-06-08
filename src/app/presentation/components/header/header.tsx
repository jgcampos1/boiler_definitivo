import { useDeviceSizes } from '../../hooks/use-device-sizes';
import HeaderDesktop from './desktop/header-desktop';
import HeaderMobile from './mobile/header-mobile';

const Header: React.FC = () => {
  const { isMobile } = useDeviceSizes();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

export default Header;
