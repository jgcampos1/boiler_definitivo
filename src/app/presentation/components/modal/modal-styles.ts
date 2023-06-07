import { makeStyles, createStyles, Theme } from '@material-ui/core';
import Colors from '~/app/presentation/styles/colors';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: 0,
      border: 0,
      boxShadow: `inset 0 -1px ${Colors.GrayLine}`
    },
    warning: {
      backgroundColor: '#fdf9da',
      padding: theme.spacing(2)
    },
    disabledOverflow: {
      '& .MuiDialog-container': {
        '& .MuiPaper-root': {
          overflow: 'inherit'
        }
      }
    },
    warningText: {
      fontSize: 12,
      color: '#8093AD'
    },
    padding: {
      padding: theme.spacing(2)
    },
    actions: {
      margin: 0,
      padding: theme.spacing(2)
    },
    loading: {
      color: theme.palette.common.white,
      marginLeft: 10
    },
    button: {
      padding: '3px 10px',
      borderRadius: 5,
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      transition: '0.2s ease-in-out',
      textTransform: 'none',
      fontSize: 14,
      marginLeft: 10,
      height: 30,
      border: 'none',
      background: theme.palette.common.white,
      boxShadow:
        'rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(64 68 82 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(64 68 82 / 8%) 0px 2px 5px 0px',
      '&:hover': {
        cursor: 'pointer',
        boxShadow:
          'rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(64 68 82 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(64 68 82 / 8%) 0px 3px 9px 0px, rgb(64 68 82 / 8%) 0px 2px 5px 0px'
      },
      '& > .MuiButton-label': {
        fontSize: 14
      }
    },
    buttonCreate: {
      height: 30
    },
    buttonCancel: {
      background: 'rgb(223, 27, 65)',
      color: '#fff',
      '&:disabled': {
        color: '#fff',
        background: 'rgb(223, 27, 65)',
        opacity: 0.5
      },
      '&:hover': {
        background: 'rgb(223, 27, 65)'
      }
    }
  })
);
