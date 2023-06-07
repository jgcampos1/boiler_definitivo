import { makeStyles, Theme } from '@material-ui/core';

type StyleProps = {
  width: number;
};

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 9999,
    position: 'fixed',
    left: '50%',
    transform: 'translate(-50%,50%)',
    top: 24,

    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    '& > div:not(:first-child)': {
      marginTop: theme.spacing(1)
    }
  }
}));
