import { ThemeProvider } from 'styled-components';

const DEFAULT_THEME = {
  primary_I: '#0a62d0',
  primary_II: '#c3cbd6',
  secondary_I: '#191718',
  secondary_II: '#000',
  neutral_I: '#344648',
  neutral_II: '#f9f7f0',
  alert_I: '#23c552',
  detail: '#fff'
};

function ThemeContextProvider({ children }) {
  return <ThemeProvider theme={DEFAULT_THEME}>{children}</ThemeProvider>;
}

export default ThemeContextProvider;
