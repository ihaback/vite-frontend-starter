import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    bg: '#ddd',
    body: '#000',
    primary: '#27FDC7',
    accent: '#7082a5',
    foreground: '#fff',
    red: 'rgb(197, 31, 31)',
  },
  maxWidth: '337px',
  fontFamily: {
    body: "--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 'Ubuntu', Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
  },
  gutter: 4,
  borderRadius: 4,
  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)',
};

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  background: ${(p) => p.theme.colors.bg}; 
  color: ${(p) => p.theme.colors.body};
  font-family:  ${(p) => p.theme.fontFamily.body};
 }

html,body,#root {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
}

`;
