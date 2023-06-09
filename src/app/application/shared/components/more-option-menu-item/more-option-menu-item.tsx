import { Fragment, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  CircularProgress,
  Divider,
  MenuItem,
  Typography
} from '@material-ui/core';
import { Box } from '@mui/system';
import clsx from 'clsx';

import { useStyles } from './more-option-menu-item-styles';

type Props = {
  title: string;
  className?: string;
  iconColor?: string;
  loading?: boolean;
  hasDividerBottom?: boolean;
  hasDividerTop?: boolean;
  hasDivider?: boolean;
  pathToRedirect?: string;
  subPaths?: any[];
  isLogout?: boolean;
  disabled?: boolean;
  disablePadding?: boolean;
  sectionTitle?: string;
  icon?: ReactNode;
  isAnchorMenuItem?: boolean;
  disabledClick?: boolean;
  dataTestId?: string;
  onClick?: () => void;
};

const MoreOptionMenuItem = ({
  className,
  title,
  icon,
  loading,
  hasDividerBottom,
  hasDividerTop,
  hasDivider,
  pathToRedirect,
  subPaths,
  onClick,
  disabled,
  disablePadding,
  sectionTitle,
  isAnchorMenuItem,
  disabledClick,
  dataTestId
}: Props) => {
  const classes = useStyles({
    disablePadding,
    disabledClick
  });

  const navigate = useNavigate();

  const redirectTo = (path: string) =>
    isAnchorMenuItem ? window.location.replace(path) : navigate(path);

  const handleClick = () => {
    redirectTo(pathToRedirect);
    // isLogout && logout()
  };

  const handleClickSubPath = (path: string) => redirectTo(path);

  const hasDividerBottomContent = hasDividerBottom || hasDivider;

  return (
    <Box className={classes.menuItemWrapper} data-testId={dataTestId}>
      {hasDividerTop && (
        <Box px={1.5}>
          <Divider />
        </Box>
      )}
      {sectionTitle && (
        <Box className={classes.sectionTitle}>
          <Typography className={classes.sectionText}>
            {sectionTitle}
          </Typography>
        </Box>
      )}
      <MenuItem
        className={clsx(classes.container, className)}
        onClick={onClick ?? handleClick}
        disabled={disabled}
      >
        {icon && <Box className={classes.icon}>{icon}</Box>}

        {loading ? <CircularProgress /> : title}
      </MenuItem>

      {subPaths && (
        <Box className={classes.subPathLinksContainer}>
          {subPaths?.map((item, index) => (
            <Fragment key={index}>
              <MenuItem
                className={classes.subPathLink}
                onClick={() => handleClickSubPath(item.path)}
              >
                {item.name}
              </MenuItem>
            </Fragment>
          ))}
        </Box>
      )}
      {hasDividerBottomContent && (
        <Box px={1.5}>
          <Divider />
        </Box>
      )}
    </Box>
  );
};

export default MoreOptionMenuItem;
