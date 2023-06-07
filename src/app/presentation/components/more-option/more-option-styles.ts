import { createStyles, makeStyles, Theme } from '@material-ui/core';

import Colors from '../../styles/colors';

type Props = {
  activeShadow?: string;
  iconWidth?: number;
  iconHeight?: number;
  disabledBorderRadiusLeftTop?: boolean;
  disabledBorderRadiusLeftBottom?: boolean;
  borderTopRightRadius?: number;
  borderBottomRightRadius?: number;
  disableFullBorder?: boolean;
  menuActionsWidth?: number;
  actionLabelAddType?: boolean;
  disabled?: boolean;
  textColor?: string;
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      '& > .MuiSvgIcon-root > .MuiSvgIcon': {
        color: 'white',
        textTransform: 'uppercase'
      }
    },
    popoverShadow: {
      '-webkit-box-shadow': '0px 2px 9px -1px rgba(0,0,0,0.25) !important',
      boxShadow: '0px 2px 9px -1px rgba(0,0,0,0.25) !important',
      filter: 'drop-shadow(3px 3px 12px rgba(0, 0, 0, 0.2))'
    },
    popover: {
      position: 'relative',
      background: theme.palette.common.white,
      display: 'grid',
      gap: theme.spacing(0.25),
      padding: theme.spacing(0.25),
      '& .MuiListItem-button': {
        minHeight: 30,
        minWidth: 180
      },
      '&:before': {
        backgroundColor: theme.palette.common.white,
        content: '""',
        display: 'block',
        position: 'absolute',
        width: 16,
        height: 16,
        top: 0,
        transform: 'rotate(45deg)',
        right: 6
      }
    },
    menuActions: {
      cursor: ({ disabled }: Props) => disabled && 'not-allowed',
      opacity: ({ disabled }: Props) => disabled && 0.3,
      pointerEvents: ({ disabled }: Props) => (disabled ? 'none' : 'all'),
      padding: theme.spacing(2.5),

      transition: 'all 0.3s ease-in-out',
      borderRadius: 4,
      width: ({ menuActionsWidth }: Props) => menuActionsWidth || 'max-content',
      height: theme.typography.pxToRem(40),
      boxShadow: ({ activeShadow }: Props) =>
        activeShadow &&
        'rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(64 68 82 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(64 68 82 / 8%) 0px 3px 9px 0px, rgb(64 68 82 / 8%) 0px 2px 5px 0px',
      '&:hover': {
        opacity: 0.5,
        background: ({ actionLabelAddType }: Props) =>
          actionLabelAddType && 'none'
      }
    },
    dropdownTitle: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: 500,
      color: ({ textColor }: Props) => textColor || Colors.BlackGray
    },

    dropdownActions: {
      color: ({ textColor }: Props) => textColor || Colors.BlackGray,
      fontSize: theme.typography.pxToRem(14),
      borderRadius: 3,
      '&:hover': {
        background: Colors.Blue1Additional
      },
      '& > span': {
        gap: theme.spacing(0.5),
        fontWeight: 500
      }
    },
    popoverActions: {
      display: 'flex',
      gap: '10px',
      flexDirection: 'column',
      '& > .MuiPaper-root': {
        boxShadow: '2px 0px 20px rgba(0, 0, 0, 0.1);'
      }
    },
    popoverDropdownActions: {
      '& > .MuiPaper-root': {
        marginTop: 5
      }
    }
  })
);
