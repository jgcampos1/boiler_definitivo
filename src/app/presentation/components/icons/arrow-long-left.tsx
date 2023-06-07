import { TrendingFlatOutlined } from '@mui/icons-material';
type Props = {
  className?: string;
};

export const ArrowLong = ({ className }: Props) => {
  return <TrendingFlatOutlined sx={{ transform: 'translatex 180' }} />;
};
