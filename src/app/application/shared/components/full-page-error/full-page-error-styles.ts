import { makeStyles, createStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex !important',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      height: '100%',

      '& > svg': {
        fill: theme.palette.primary.main,
        width: 80,
        height: 80,
        marginBottom: theme.spacing(2)
      },

      '& > h1': {
        color: theme.palette.primary.main
      },

      '& > p': {
        color: theme.palette.text.secondary,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3)
      }
    }
  })
);
