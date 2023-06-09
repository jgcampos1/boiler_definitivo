import { Menu } from '@mui/icons-material';
type Props = {
  className?: string;
};

export const MenuIcon = ({ className }: Props) => {
  return <Menu className={className} />;
};
