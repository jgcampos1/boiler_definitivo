import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { createTheme } from '@mui/material';

import Colors from './colors';

const { typography } = createTheme();
const breakpoints = createBreakpoints({});

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.Primary
    },
    secondary: {
      main: Colors.Secondary
    },
    background: {
      default: Colors.White,
      paper: Colors.Paper
    },
    text: {
      primary: Colors.FontHeader,
      secondary: Colors.BlueGray
    },
    error: {
      main: Colors.RedAlert
    },
    divider: Colors.GrayLine
  },
  typography: {
    fontFamily: "'Soleil', sans serif",
    htmlFontSize: 16,
    [breakpoints.up('md')]: {
      htmlFontSize: 14
    },

    h1: {
      fontSize: typography.pxToRem(40),
      fontWeight: 600
    },
    h2: {
      fontSize: typography.pxToRem(25),
      fontWeight: 600
    },
    h3: {
      fontSize: typography.pxToRem(20),
      fontWeight: 600
    },
    subtitle1: {
      fontSize: typography.pxToRem(16),
      fontWeight: 600
    },
    body1: {
      fontSize: typography.pxToRem(16)
    },
    body2: {
      fontSize: typography.pxToRem(14)
    },
    caption: {
      fontSize: typography.pxToRem(14),
      fontWeight: 600
    },
    button: {
      fontSize: typography.pxToRem(16)
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: Colors.Secondary,
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: Colors.Paper,
            width: 10
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 3,
            backgroundColor: Colors.Secondary,
            minHeight: 24,
            maxHeight: 50
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
            {
              backgroundColor: Colors.FontHeader
            },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
            {
              backgroundColor: Colors.FontHeader
            },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: Colors.FontHeader
            },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: Colors.FontHeader
          }
        }
      }
    }
  }
});
