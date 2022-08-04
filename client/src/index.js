import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Reset, GlobalStyles } from './styles';
import { store } from './store';
import {
  ThemeContextProvider,
  PaginatedCouponsContextProvider,
  PaginatedStoresContextProvider,
  CategoriesContextProvider
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
          <PaginatedCouponsContextProvider>
            <PaginatedStoresContextProvider>
              <CategoriesContextProvider>
                <App />
              </CategoriesContextProvider>
            </PaginatedStoresContextProvider>
          </PaginatedCouponsContextProvider>
        </BrowserRouter>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);

// reportWebVitals();
