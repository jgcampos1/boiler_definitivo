import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { createTheme } from '@mui/material';

import Colors from './colors';
import styleJson from './tokens.json';

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
    fontFamily: styleJson.fontFamilies.brinnan,
    fontSize: Number(styleJson.fontSize[1]),
    [breakpoints.up('md')]: {
      htmlFontSize: Number(styleJson.fontSize[0])
    },
    ...styleJson.core,
    // TODO: implemnent caption in design system
    caption: {
      fontSize: typography.pxToRem(14),
      fontWeight: 600
    },
    // TODO implement button in design system
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
