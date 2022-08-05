import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectAll,
  loadSearchedCouponsAsync
} from '../../store/searched-coupons';
import { Spinner } from '../../components/spinner';
import { Section } from '../../components/section';
import { CouponsDisplayboard } from '../../components/coupons-displayboard';

function StoresSingle() {
  const { coupons, isLoading } = useSelector(selectAll);
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

  const loadingContent = <Spinner fullpage />;

  const loadedContent = <CouponsDisplayboard coupons={coupons} />;

  return (
    <Fragment>
      <Section title={store}>
        {isLoading ? loadingContent : loadedContent}
      </Section>
    </Fragment>
  );
}

export default StoresSingle;
