import { ReactElement, useState, useEffect, ReactNode } from 'react';

import { Box, IconButton, Popover, Typography } from '@material-ui/core';
import { KeyboardArrowDownRounded } from '@mui/icons-material';
import clsx from 'clsx';

import { useStyles } from './more-option-styles';

type Props = {
  children: ReactElement | ReactElement[];
  width?: number;
  activeShadow?: string;
  disabledBorderRadiusLeftTop?: boolean;
  disabledBorderRadiusLeftBottom?: boolean;
  borderBottomRightRadius?: number;
  borderTopRightRadius?: number;
  iconWidth?: number;
  iconHeight?: number;
  isDropdownActions?: boolean;
  isDropdownRight?: boolean;
  disableFullBorder?: boolean;
  menuActionsWidth?: number;
  actionLabelAddType?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  labelButton?: string;
  icon?: ReactNode;
  textColor?: string;
};

const MoreOption = ({
  children,
  textColor,
  width,
  activeShadow,
  iconWidth,
  iconHeight,
  disabledBorderRadiusLeftTop,
  disabledBorderRadiusLeftBottom,
  borderBottomRightRadius,
  borderTopRightRadius,
  isDropdownActions,
  disableFullBorder,
  menuActionsWidth,
  actionLabelAddType,
  onClick,
  labelButton,
  icon,
  disabled
}: Props) => {
  const classes = useStyles({
    activeShadow,
    iconWidth,
    textColor,
    iconHeight,
    disabledBorderRadiusLeftTop,
    disabledBorderRadiusLeftBottom,
    borderBottomRightRadius,
    borderTopRightRadius,
    disableFullBorder,
    menuActionsWidth,
    actionLabelAddType,
    disabled
  });

  const [anchor, setAnchor] = useState<HTMLButtonElement | null>(null);

  const handleAnchor = (element: HTMLButtonElement | null) => {
    setAnchor(element);

    if (typeof onClick !== 'undefined') onClick();
  };

  const onClose = () => handleAnchor(null);

  useEffect(() => {
    if (!anchor) return;

    document.addEventListener('mousedown', onClose);

    return () => document.removeEventListener('mousedown', onClose);
  }, [anchor]);

  return (
    <Box
      className={clsx(classes.container)}
      data-testid='more-options-container'
    >
      <IconButton
        className={clsx(classes.menuActions, classes.dropdownActions)}
        onClick={(e) => handleAnchor(e.currentTarget)}
        aria-disabled={disabled}
      >
        {icon && icon}
        <Typography className={classes.dropdownTitle}>
          {labelButton ?? 'Actions'}
        </Typography>
        <KeyboardArrowDownRounded />
      </IconButton>

      <Popover
        className={clsx(
          classes.popoverActions,
          isDropdownActions && classes.popoverDropdownActions
        )}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={onClose}
        elevation={1}
        aria-label='more-option'
      >
        <Box className={classes.popover} minWidth={width ?? 140}>
          {children}
        </Box>
      </Popover>
    </Box>
  );
};

export default MoreOption;
