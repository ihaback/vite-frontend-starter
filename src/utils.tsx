import React from 'react';
import { RootState, getStoreWithState } from '@store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles';

export const renderWithProviders = (element: React.ReactElement, state?: RootState) => {
  const store = getStoreWithState(state);
  const utils = render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </Provider>,
  );
  return { store, ...utils };
};
