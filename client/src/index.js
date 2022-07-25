import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Reset, GlobalStyles } from './styles';
import { ThemeContextProvider } from './contexts';
import {
  FeaturedStoresContextProvider,
  FeaturedCouponsContextProvider
} from './contexts';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Reset />
      <GlobalStyles />

      <BrowserRouter>
        <FeaturedStoresContextProvider>
          <FeaturedCouponsContextProvider>
            <App />
          </FeaturedCouponsContextProvider>
        </FeaturedStoresContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);

// reportWebVitals();
