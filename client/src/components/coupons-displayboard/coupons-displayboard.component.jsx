import { CouponCard } from '../coupon-card';
import { DisplayboardContainer } from './index';

function CouponsDisplayboard({ coupons }) {
  return (
    <DisplayboardContainer>
      {coupons.map((coupon) => (
        <CouponCard key={coupon.code} coupon={coupon} />
      ))}
    </DisplayboardContainer>
  );
}

export default CouponsDisplayboard;
