import { ThemeProvider } from 'styled-components';

const DEFAULT_THEME = {
  primary_I: '#0a62d0',
  primary_II: '#4682b4',
  secondary_I: '#191718',
  secondary_II: '#000',
  neutral_I: '#344648',
  neutral_II: '#f9f7f0',
  alert_I: '#23c552',
  detail_I: '#fff',
  detail_II: '#ff3131',
  primaryFontFamily: '"Nunito", sans-serif',
  secondaryFontFamily: '"Poppins", sans-serif'
};

function ThemeContextProvider({ children }) {
  return <ThemeProvider theme={DEFAULT_THEME}>{children}</ThemeProvider>;
}

export default ThemeContextProvider;
