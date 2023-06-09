import { ArrowBack } from '@mui/icons-material';

type Props = {
  className?: string;
};

export const ArrowPrev = ({ className }: Props) => {
  return <ArrowBack className={className} />;
};
