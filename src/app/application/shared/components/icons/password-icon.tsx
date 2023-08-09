import { Eye, EyeClosed } from '@phosphor-icons/react';

interface Props {
  size?: number;
  color?: string;
  showPassword?: boolean;
  toggleShowPassword?: () => void;
}

export const PasswordIcon = ({
  size = 32,
  color = '#000',
  showPassword,
  toggleShowPassword
}: Props) => {
  const handleClick = () => {
    toggleShowPassword();
  };
  return showPassword ? (
    <Eye {...{ size, color }} onClick={handleClick} />
  ) : (
    <EyeClosed {...{ size, color }} onClick={handleClick} />
  );
};
