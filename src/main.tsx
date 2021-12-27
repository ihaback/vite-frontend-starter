import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles, theme } from '@styles';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from '@store';
import App from './App';

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
