import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

interface Props {
  className?: string;
}
export const ProfileIcon = ({ className }: Props) => (
  <AccountCircleOutlinedIcon className={className} />
);
