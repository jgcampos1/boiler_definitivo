import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      bottom: 0,
      right: 0
    },
    link: {
      marginLeft: theme.spacing(1),
      color: 'white',
      border: 'none',
      background: 'none',
      textDecoration: 'underline'
    }
  })
);
