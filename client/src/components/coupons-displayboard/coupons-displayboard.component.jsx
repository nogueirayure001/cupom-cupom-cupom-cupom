import { useState } from 'react';
import { nanoid } from 'nanoid';

import { emptyArrayCreator } from '../../utils';
import { CouponCard } from '../coupon-card';
import { DisplayboardContainer } from './index';
import { Button } from '../button';

function CouponsDisplayboard({ coupons, isLoading, lazy, defaultUnits = 10 }) {
  const [showingUnits, setShowingUnits] = useState(defaultUnits);
  const increment = defaultUnits;
  const hasLazyButton = lazy && showingUnits < coupons.length;

  const clickHandler = async () => {
    if (showingUnits >= coupons.length) return;

    const position = window.scrollY;

    await setShowingUnits(showingUnits + increment);

    window.scrollTo({ top: position });
  };

  const loadingCoupons = emptyArrayCreator(defaultUnits).map(() => (
    <CouponCard key={nanoid()} showPlaceholder />
  ));

  const loadedCoupons = coupons
    .filter((_, index) => index < showingUnits)
    .map((coupon) => <CouponCard key={nanoid()} coupon={coupon} />);

  return (
    <DisplayboardContainer>
      {isLoading ? loadingCoupons : loadedCoupons}

      {hasLazyButton && (
        <Button type='button' onClick={clickHandler}>
          mostrar mais
        </Button>
      )}
    </DisplayboardContainer>
  );
}

export default CouponsDisplayboard;
