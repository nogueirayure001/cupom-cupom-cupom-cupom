import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  selectAll,
  updateQuery,
  loadSearchedCouponsAsync
} from '../../store/searched-coupons';
import { useSelector, useDispatch } from 'react-redux';
import { Section } from '../../components/section';
import { CouponsDisplayboard } from '../../components/coupons-displayboard';
import { Spinner } from '../../components/spinner';

function CouponsSearch() {
  const dispatch = useDispatch();
  const { coupons, query, isLoading } = useSelector(selectAll);
  const { searchTerm } = useParams();

  useEffect(() => {
    dispatch(updateQuery({ ...query, searchTerm }));
  }, [searchTerm]);

  useEffect(() => {
    if (query.searchTerm) dispatch(loadSearchedCouponsAsync(query));
  }, [query]);

  return (
    <Section title='Resultados da busca'>
      {isLoading ? (
        <Spinner fullpage />
      ) : (
        <CouponsDisplayboard lazy coupons={coupons} />
      )}
    </Section>
  );
}

export default CouponsSearch;
