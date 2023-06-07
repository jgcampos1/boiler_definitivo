import { Close } from '@mui/icons-material/';
type Props = {
  className?: string;
};

export const CloseIcon = ({ className }: Props) => {
  return <Close className={className} />;
};

export default CloseIcon;
