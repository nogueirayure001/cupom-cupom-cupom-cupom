import { useState, useCallback, useEffect } from 'react';

import { httpGetFeaturedCoupons } from './index';

function useFeaturedCoupons() {
  const [coupons, setCoupons] = useState([]);

  const getFeaturedCoupons = useCallback(async () => {
    const response = await httpGetFeaturedCoupons();

    if (response.requestInfo.success) {
      setCoupons(response.data);
    }
  }, []);

  useEffect(() => {
    getFeaturedCoupons();
  }, [getFeaturedCoupons]);

  return coupons;
}

export default useFeaturedCoupons;
