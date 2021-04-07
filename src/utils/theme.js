import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#000104'
    },
    secondary: {
      main: '#0Cafff'
    },
    background: {
      default: '#000104'
    },
    text: {
      primary: '#000104'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontFamily: ['Ubuntu', 'Open Sans', 'sans-serif'].join(',')
        },
        body: {
          fontFamily: ['Ubuntu', 'Open Sans', 'sans-serif'].join(',')
        }
      }
    },
    MuiFormLabel: {
      root: {
        fontFamily: ['Ubuntu', 'Open Sans', 'sans-serif'].join(','),
        color: '#000104'
      }
    }
  }
});

export default theme;
