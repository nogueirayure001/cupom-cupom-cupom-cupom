import { nanoid } from 'nanoid';

import { CouponCard } from '../coupon-card';
import { DisplayboardContainer } from './index';

function CouponsDisplayboard({ coupons }) {
  return (
    <DisplayboardContainer>
      {coupons.map((coupon) => (
        <CouponCard key={nanoid()} coupon={coupon} />
      ))}
    </DisplayboardContainer>
  );
}

export default CouponsDisplayboard;
