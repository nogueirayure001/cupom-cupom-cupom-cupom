import { createContext } from 'react';

import { useFetchAPIResource } from '../hooks';

const DEFAULT_PAGINATED_COUPONS = {
  coupons: [],
  pagination: {}
};

const PaginatedCouponsContext = createContext(DEFAULT_PAGINATED_COUPONS);

function PaginatedCouponsContextProvider({ children }) {
  const resourcePath = '/coupons/paginated';
  const resource = useFetchAPIResource(resourcePath);

  const coupons = resource.data || [];
  const pagination = resource.pagination || { previous: null, next: null };

  const value = {
    coupons,
    pagination
  };

  return (
    <PaginatedCouponsContext.Provider value={value}>
      {children}
    </PaginatedCouponsContext.Provider>
  );
}

export { PaginatedCouponsContext, PaginatedCouponsContextProvider };
