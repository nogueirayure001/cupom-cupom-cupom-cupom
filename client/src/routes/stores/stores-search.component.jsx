import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Section } from '../../components/section';
import { StoresDisplayboard } from '../../components/stores-displayboard';
import { httpFetchAPIResource } from '../../utils';

function StoresSearch() {
  const [stores, setStores] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    const getSearchResults = async () => {
      const { data } = await httpFetchAPIResource('/stores/search', {
        searchTerm
      });

      if (data) setStores(data);
    };

    getSearchResults();
  }, [searchTerm]);

  return (
    <Fragment>
      <Section title='Resultados da busca'>
        <StoresDisplayboard stores={stores} />
      </Section>
    </Fragment>
  );
}

export default StoresSearch;
