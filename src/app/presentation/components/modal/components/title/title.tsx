import {
  DialogTitle,
  DialogTitleProps,
  IconButton,
  Typography
} from '@material-ui/core';

import { CloseIcon } from '../../../icons';
import { useStyles } from './title-styles';

type Props = DialogTitleProps & {
  title: string;
  isTitleBold?: boolean;
  hideCloseModal?: boolean;
  onClose: () => void;
};

const Title = ({
  title,
  isTitleBold,
  onClose,
  hideCloseModal,
  ...props
}: Props) => {
  const classes = useStyles();

  return (
    <DialogTitle disableTypography className={classes.root} {...props}>
      <Typography
        variant='h3'
        className={classes.title}
        style={{ fontWeight: isTitleBold && 900 }}
      >
        {title}
      </Typography>

      {!hideCloseModal && (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      )}
    </DialogTitle>
  );
};

export default Title;
