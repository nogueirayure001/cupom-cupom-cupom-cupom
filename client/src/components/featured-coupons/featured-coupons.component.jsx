import { useContext } from 'react';

import { CouponCard } from '../coupon-card';
import { FeaturedCouponsContainer } from './index';
import { FeaturedCouponsContext } from '../../contexts';

function FeaturedCoupons(props) {
  const coupons = useContext(FeaturedCouponsContext);

  return (
    <FeaturedCouponsContainer>
      {coupons.map((coupon) => (
        <CouponCard key={coupon.code} coupon={coupon} />
      ))}
    </FeaturedCouponsContainer>
  );
}

export default FeaturedCoupons;
