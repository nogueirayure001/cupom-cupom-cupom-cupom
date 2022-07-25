import { createContext } from 'react';
import { useFeaturedCoupons } from '../hooks';

const DEFAULT_FEATURED_COUPONS = [];

const FeaturedCouponsContext = createContext(DEFAULT_FEATURED_COUPONS);

function FeaturedCouponsContextProvider({ children }) {
  const coupons = useFeaturedCoupons();

  return (
    <FeaturedCouponsContext.Provider value={coupons}>
      {children}
    </FeaturedCouponsContext.Provider>
  );
}

export { FeaturedCouponsContext, FeaturedCouponsContextProvider };
