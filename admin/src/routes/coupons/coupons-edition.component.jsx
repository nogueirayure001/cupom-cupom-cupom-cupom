import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import {
  loadPaginatedCouponsAsync,
  selectCouponsState
} from '../../store/coupons';
import { selectToken } from '../../store/auth';
import { Section } from '../../components/section';
import { Spinner } from '../../components/spinner';
import { CouponEditionCard } from '../../components/coupon-edition-card';
import { PaginationController } from '../../components/pagination-controller';
import { DisplayBoard } from './index';

function CouponsEdition() {
  const token = useSelector(selectToken);
  const { paginatedCoupons, pagination, isLoading } =
    useSelector(selectCouponsState);
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    const query = { page };

    dispatch(loadPaginatedCouponsAsync(token, query));
  }, [page]);

  if (isLoading) return <Spinner fullpage />;

  return (
    <Fragment>
      <Section title='Editar Cupons'>
        <DisplayBoard>
          {paginatedCoupons.map((coupon) => (
            <CouponEditionCard key={nanoid()} coupon={coupon} />
          ))}
        </DisplayBoard>

        <PaginationController
          {...pagination}
          basePath='admin/coupons/edition'
        />
      </Section>
    </Fragment>
  );
}

export default CouponsEdition;
