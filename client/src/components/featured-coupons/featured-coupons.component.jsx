import { CouponCard } from "../coupon-card";
import { FeaturedCouponsContainer } from "./index";

import { COUPONS_TEST } from "../../assets/data";

function FeaturedCoupons(props) {
  return (
    <FeaturedCouponsContainer>
      {COUPONS_TEST.map((coupon) => (
        <CouponCard key={coupon.code} coupon={coupon} />
      ))}
    </FeaturedCouponsContainer>
  );
}

export default FeaturedCoupons;
