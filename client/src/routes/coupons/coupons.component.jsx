import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { PaginatedCouponsContext } from '../../contexts';
import { Section } from '../../components/section';
import { CouponsDisplayboard } from '../../components/coupons-displayboard';
import { PaginationController } from '../../components/pagination-controller';

function Coupons() {
  const { coupons, pagination, changePage } = useContext(
    PaginatedCouponsContext
  );

  const { page } = useParams();

  useEffect(() => {
    changePage(+page);
  }, [page]);

  return (
    <Section title='Confira todos os cupons disponíveis'>
      <CouponsDisplayboard coupons={coupons} />

      <PaginationController {...pagination} />
    </Section>
  );
}

export default Coupons;
