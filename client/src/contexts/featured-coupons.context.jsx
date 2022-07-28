import { createContext, useEffect, useState } from 'react';

import { httpFetchAPIResource } from '../utils';

const FeaturedCouponsContext = createContext([]);

function FeaturedCouponsContextProvider({ children }) {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    const getFeaturedCoupons = async () => {
      const resourcePath = '/coupons/featured';

      const { data } = await httpFetchAPIResource(resourcePath);

      setCoupons(data);
    };

    getFeaturedCoupons();
  }, []);

  return (
    <FeaturedCouponsContext.Provider value={coupons}>
      {children}
    </FeaturedCouponsContext.Provider>
  );
}

export { FeaturedCouponsContext, FeaturedCouponsContextProvider };
