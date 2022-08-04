import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  selectAll,
  updateQuery,
  loadSearchResultsAsync
} from '../../store/searched-coupons';
import { useSelector, useDispatch } from 'react-redux';
import { Section } from '../../components/section';
import { CouponsDisplayboard } from '../../components/coupons-displayboard';
import { Spinner } from '../../components/spinner';

function CouponsSearch() {
  const dispatch = useDispatch();
  const { searchResults, query, isLoading } = useSelector(selectAll);
  const { searchTerm } = useParams();

  useEffect(() => {
    dispatch(updateQuery({ ...query, searchTerm }));
  }, [searchTerm]);

  useEffect(() => {
    if (query.searchTerm) dispatch(loadSearchResultsAsync(query));
  }, [query]);

  return (
    <Section title='Resultados da busca'>
      {isLoading ? (
        <Spinner />
      ) : (
        <CouponsDisplayboard coupons={searchResults} />
      )}
    </Section>
  );
}

export default CouponsSearch;
