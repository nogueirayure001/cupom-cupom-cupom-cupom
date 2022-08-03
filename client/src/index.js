import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Reset, GlobalStyles } from './styles';
import { store } from './store';
import { ThemeContextProvider } from './contexts';
import {
  FeaturedCouponsContextProvider,
  PaginatedCouponsContextProvider,
  PaginatedStoresContextProvider,
  CategoriesContextProvider,
  CouponsSearchFiltersContextProvider
} from './contexts';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <Reset />
        <GlobalStyles />

        <BrowserRouter>
          <FeaturedCouponsContextProvider>
            <PaginatedCouponsContextProvider>
              <PaginatedStoresContextProvider>
                <CategoriesContextProvider>
                  <CouponsSearchFiltersContextProvider>
                    <App />
                  </CouponsSearchFiltersContextProvider>
                </CategoriesContextProvider>
              </PaginatedStoresContextProvider>
            </PaginatedCouponsContextProvider>
          </FeaturedCouponsContextProvider>
        </BrowserRouter>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);

// reportWebVitals();
