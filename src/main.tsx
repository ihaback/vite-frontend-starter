import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles, theme } from '@styles';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from '@store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
