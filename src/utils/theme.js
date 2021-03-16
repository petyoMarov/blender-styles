import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2a2a2a'
    },
    secondary: {
      main: '#4aadeb'
    },
    background: {
      default: '#111111'
    }
  }
});

export default theme;
