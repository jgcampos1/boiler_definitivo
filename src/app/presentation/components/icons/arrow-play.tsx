import { PlayArrow } from '@mui/icons-material';

type Props = {
  className?: string;
};

export const ArrowPlay = ({ className }: Props) => {
  return <PlayArrow className={className} />;
};
