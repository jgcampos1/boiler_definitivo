import { EmailOutlined } from '@mui/icons-material';

type Props = {
  className?: string;
};

export const EmailIcon = ({ className }: Props) => (
  <EmailOutlined className={className} />
);
