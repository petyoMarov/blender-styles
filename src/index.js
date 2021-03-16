import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { ThemeProvider } from '@material-ui/core/styles';
import GlobalStyles from './global-styles';
import theme from './utils/theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
