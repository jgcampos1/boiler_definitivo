import { useEffect } from 'react';

import { Link, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { ToastTypes } from '~/app/application/general/toast/types/toast-types';
import { useToast } from '~/app/presentation/hooks/use-toast';

import { useStyles } from './toast-styles';

type Props = {
  id: string;
  text: string;
  type: ToastTypes;
  textLink?: string;
  buttonClick?: () => void;
};

const Toast = ({ id, text, type, buttonClick, textLink }: Props) => {
  const { removeToast } = useToast();

  const classes = useStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [id]);

  return (
    <Snackbar
      data-testid='alert-snackbar'
      className={classes.root}
      open={Boolean(id)}
    >
      <Alert aria-label={text} elevation={6} variant='filled' severity={type}>
        {text}
        {buttonClick && (
          <Link className={classes.link} onClick={buttonClick}>
            {textLink || 'link'}
          </Link>
        )}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
