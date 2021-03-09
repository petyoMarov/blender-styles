import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// eslint-disable-next-line import/no-mutable-exports
let theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2A2A2A'
    },
    secondary: {
      main: '#4AADEB'
    },
    background: {
      default: '#111111'
    }
  },
  typography: {
    fontFamily: "'Open Sans', 'Arial', sans-serif",
    fontSize: 16
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontFamily: ['Open Sans', 'Arial', 'sans-serif'].join(',')
        }
      }
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
