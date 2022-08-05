import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectSearchedCoupons,
  loadSearchedCouponsAsync
} from '../../store/searched-coupons';
import { Section } from '../../components/section';
import { CouponsDisplayboard } from '../../components/coupons-displayboard';

function StoresSingle() {
  const coupons = useSelector(selectSearchedCoupons);
  const dispatch = useDispatch();
  const { store } = useParams();

  useEffect(() => {
    const query = {
      filters: {
        store: true,
        category: false,
        keyword: false
      },
      searchTerm: store
    };

    dispatch(loadSearchedCouponsAsync(query));
  }, [store]);

  return (
    <Fragment>
      <Section title={store}>
        <CouponsDisplayboard coupons={coupons} />
      </Section>
    </Fragment>
  );
}

export default StoresSingle;
