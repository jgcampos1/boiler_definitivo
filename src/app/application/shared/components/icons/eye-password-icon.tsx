import { Visibility, VisibilityOff } from '@mui/icons-material/';
interface Props {
  visibility: boolean;
  className?: string;
  onClick?: () => void;
}
export const EyePasswordIcon = ({
  visibility = false,
  className,
  onClick
}: Props) => {
  return visibility ? (
    <VisibilityOff {...{ onClick, className }} />
  ) : (
    <Visibility {...{ onClick, className }} />
  );
};
