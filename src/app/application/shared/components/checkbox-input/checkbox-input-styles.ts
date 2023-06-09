import { makeStyles, createStyles, Theme } from '@material-ui/core';

import Colors from '../../styles/colors';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      display: 'flex',
      alignItems: 'center',
      width: 'max-content',
      maxWidth: '100%'
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '5px'
    },
    checkbox: {
      '& input + *': {
        borderRadius: theme.spacing(0.6),
        width: theme.spacing(2.5),
        height: theme.spacing(2.5)
      },
      '& input:disabled + *': {
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.3) !important',
        background: 'rgba(206,217,224,.5) !important'
      },
      '&:not(.Mui-checked)': {
        '& input + *': {
          backgroundColor: Colors.BgGray,
          border: `1px solid ${Colors.GrayLine}`
        }
      },
      '&.Mui-checked': {
        '& input + *': {
          border: 'none',
          backgroundColor: theme.palette.primary.main,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          '&:before': {
            display: 'block',
            width: 15,
            height: 15,
            backgroundImage:
              `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath` +
              " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
              `1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='white'/%3E%3C/svg%3E")`,
            content: '""'
          }
        }
      }
    },
    formControlLabel: {
      fontSize: theme.typography.pxToRem(14),
      color: Colors.BlueGray
    },
    optional: {
      fontSize: theme.typography.pxToRem(14),
      color: Colors.BlueGray
    }
  })
);
