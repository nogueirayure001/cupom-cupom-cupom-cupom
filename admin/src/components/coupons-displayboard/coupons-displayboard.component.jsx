import { nanoid } from 'nanoid';

import { emptyArrayCreator } from '../../utils';
import { CouponCard } from '../coupon-card';
import { DisplayboardContainer } from './index';

function CouponsDisplayboard({ coupons, isLoading, defaultUnits = 10 }) {
  const loadingCoupons = emptyArrayCreator(defaultUnits).map(() => (
    <CouponCard key={nanoid()} showPlaceholder />
  ));

  const loadedCoupons = coupons.map((coupon) => (
    <CouponCard key={nanoid()} coupon={coupon} />
  ));

  return (
    <DisplayboardContainer>
      {isLoading ? loadingCoupons : loadedCoupons}
    </DisplayboardContainer>
  );
}

export default CouponsDisplayboard;
