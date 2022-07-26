import { useContext } from 'react';

import { PaginatedCouponsContext } from '../../contexts';
import { Section } from '../../components/section';
import { CouponsDisplayboard } from '../../components/coupons-displayboard';

function Coupons() {
  const { coupons, pagination } = useContext(PaginatedCouponsContext);

  return (
    <Section title='Confira todos os cupons disponíveis'>
      <CouponsDisplayboard coupons={coupons} />
    </Section>
  );
}

export default Coupons;
