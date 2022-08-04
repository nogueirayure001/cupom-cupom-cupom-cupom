import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectAll,
  loadPaginatedCouponsDataAsync
} from '../../store/paginated-coupons';
import { Section } from '../../components/section';
import { CouponsDisplayboard } from '../../components/coupons-displayboard';
import { PaginationController } from '../../components/pagination-controller';

function CouponsPaginated() {
  const { coupons, pagination } = useSelector(selectAll);
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    dispatch(loadPaginatedCouponsDataAsync(page));
  }, [page]);

  return (
    <Section title='Confira todos os cupons disponíveis'>
      <CouponsDisplayboard coupons={coupons} />

      <PaginationController {...pagination} basePath='coupons' />
    </Section>
  );
}

export default CouponsPaginated;
