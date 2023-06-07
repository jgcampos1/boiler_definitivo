import { makeStyles, createStyles, Theme } from '@material-ui/core';
import Colors from '~/app/presentation/styles/colors';

type StyleProps = {
  color?: string;
  disablePadding?: boolean;
  disabledClick?: boolean;
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),
      color: ({ color }: StyleProps) => color ?? Colors.BlueGray,
      fontWeight: 500,
      justifyContent: 'flex-start',
      fontSize: theme.typography.pxToRem(16),
      borderRadius: 5,
      '& > svg': {
        fill: Colors.BlueGray
      },
      pointerEvents: ({ disabledClick }: StyleProps) =>
        disabledClick ? 'none' : 'all'
    },
    subPathLink: {
      color: Colors.BlueGray,
      textDecoration: 'none',
      fontSize: theme.typography.pxToRem(16),
      transition: 'filter 0.1s ease-in-out',
      padding: 0,

      '&:hover': {
        filter: 'brightness(0.7)',
        background: 'none'
      }
    },
    subPathLinksContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: theme.spacing(2),
      paddingLeft: theme.spacing(8),
      marginBottom: theme.spacing(2)
    },
    menuItemWrapper: {
      display: 'flex',
      gap: theme.spacing(1),
      flexDirection: 'column',
      '& .Mui-disabled': {
        opacity: 0.3
      }
    },
    sectionTitle: {
      margin: theme.spacing(2, 1)
    },
    sectionText: {
      color: Colors.BlueGray,
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(16.8),
      fontWeight: 500
    },
    icon: {
      width: 25,
      height: 25,
      fill: Colors.BlueGray
    }
  })
);
