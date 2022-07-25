import { createContext } from 'react';

import { useFetchAPIResource } from '../hooks';

const DEFAULT_FEATURED_COUPONS = [];

const FeaturedCouponsContext = createContext(DEFAULT_FEATURED_COUPONS);

function FeaturedCouponsContextProvider({ children }) {
  const resourcePath = '/coupons/featured';
  const coupons = useFetchAPIResource(resourcePath);

  return (
    <FeaturedCouponsContext.Provider value={coupons}>
      {children}
    </FeaturedCouponsContext.Provider>
  );
}

export { FeaturedCouponsContext, FeaturedCouponsContextProvider };
