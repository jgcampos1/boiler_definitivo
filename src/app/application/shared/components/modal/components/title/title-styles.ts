import { makeStyles, createStyles, Theme } from '@material-ui/core';
import Colors from '~/app/application/shared/styles/colors';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(0, 2.5),
      padding: theme.spacing(2, 2, 2.5, 0),
      boxShadow: `inset 0 -1px ${Colors.GrayLine}`,
      '& > .MuiTypography-root': {
        margin: 0
      }
    },

    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    },
    title: {
      fontSize: theme.typography.pxToRem(20),
      color: theme.palette.text.primary,
      fontWeight: 600,
      marginBottom: 10,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(14)
      }
    }
  })
);
