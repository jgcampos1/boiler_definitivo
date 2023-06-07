import { ButtonProps, CircularProgress } from '@mui/material';

import { Button } from './base-button-styles';

type Props = ButtonProps & {
  isLoading?: boolean;
};

const BaseButton = ({
  children,
  isLoading = false,
  disabled = false,
  ...props
}: Props) => {
  return (
    <Button
      {...props}
      value='button'
      endIcon={isLoading ? <CircularProgress size={20} /> : props.endIcon}
      variant='contained'
      disabled={isLoading || disabled}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
