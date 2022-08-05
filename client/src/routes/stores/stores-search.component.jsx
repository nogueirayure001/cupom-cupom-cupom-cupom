import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectAll,
  loadSearchedStoresAsync
} from '../../store/searched-stores';
import { Section } from '../../components/section';
import { StoresDisplayboard } from '../../components/stores-displayboard';

function StoresSearch() {
  const { stores } = useSelector(selectAll);
  const dispatch = useDispatch();
  const { searchTerm } = useParams();

  useEffect(() => {
    dispatch(loadSearchedStoresAsync(searchTerm));
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
