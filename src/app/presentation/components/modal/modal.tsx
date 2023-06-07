import { ReactElement } from 'react';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps
} from '@material-ui/core';
import { Box, Typography } from '@mui/material';
import clsx from 'clsx';

import { BaseButton } from '../buttons';
import { Title } from './components';
import { useStyles } from './modal-styles';

type Props = DialogProps & {
  children: ReactElement | ReactElement[];
  title?: string;
  type?: 'button' | 'reset' | 'submit';
  loading?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  disabled?: boolean;
  isTitleBold?: boolean;
  hideCloseModal?: boolean;
  isButtonPrimary?: boolean;
  hideCancel?: boolean;
  onConfirm?: () => void;
  onClose: () => void;
  disablePadding?: boolean;
  warning?: string;
  isButtonCancel?: boolean;
  hiddenActions?: boolean;
  disableOverflow?: boolean;
  confirmButtonTestId?: string;
};

const Modal = ({
  children,
  title,
  loading,
  disabled,
  confirmButtonText,
  cancelButtonText,
  isTitleBold,
  hideCancel,
  hideCloseModal,
  type,
  onConfirm,
  onClose,
  disablePadding,
  hiddenActions,
  disableOverflow,
  warning,
  ...props
}: Props) => {
  const classes = useStyles();

  return (
    <Dialog
      {...props}
      {...{ onClose }}
      className={disableOverflow && classes.disabledOverflow}
      aria-label='modal'
    >
      {title && <Title {...{ title, onClose, isTitleBold, hideCloseModal }} />}
      {warning && (
        <Box className={classes.warning}>
          <Typography className={classes.warningText}>warning</Typography>
        </Box>
      )}
      <DialogContent
        dividers
        className={clsx({
          [classes.content]: true,
          [classes.padding]: !disablePadding
        })}
      >
        {children}
      </DialogContent>

      {!hiddenActions && (
        <DialogActions className={classes.actions}>
          {!hideCancel && (
            <BaseButton
              onClick={onClose}
              disabled={loading}
              className={classes.buttonCreate}
            >
              {cancelButtonText || 'cancelar'}
            </BaseButton>
          )}

          <BaseButton
            onClick={onConfirm}
            className={classes.buttonCreate}
            disabled={loading || disabled}
            {...{ type, loading }}
          >
            {confirmButtonText}
          </BaseButton>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default Modal;
