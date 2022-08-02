import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CouponsSearchFiltersContext } from '../../contexts';
import { Section } from '../../components/section';
import { CouponsDisplayboard } from '../../components/coupons-displayboard';
import { httpFetchAPIResource } from '../../utils';

function CouponsSearch() {
  const [coupons, setCoupons] = useState([]);
  const [searchFilters, setSearchFilters] = useState('');
  const { filters } = useContext(CouponsSearchFiltersContext);
  const { searchTerm } = useParams();

  useEffect(() => {
    const updatedSearchFilters = [];

    for (const [key, value] of Object.entries(filters)) {
      if (value) updatedSearchFilters.push(key);
    }

    setSearchFilters(updatedSearchFilters.join(','));
  }, [filters]);

  useEffect(() => {
    const getSearchResults = async () => {
      const { data } = await httpFetchAPIResource('/coupons/search', {
        searchTerm,
        searchFilters
      });

      setCoupons(data);
    };

    getSearchResults();
  }, [searchTerm, searchFilters]);

  return (
    <Section title='Resultados da busca'>
      <CouponsDisplayboard coupons={coupons} />
    </Section>
  );
}

export default CouponsSearch;
