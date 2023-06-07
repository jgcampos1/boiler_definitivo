import { Visibility } from '@mui/icons-material/';
interface Props {
  className?: string;
}
export const EyeVisibilityIcon = ({ className }: Props) => (
  <Visibility {...{ className }} />
);
