import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectAll,
  loadSearchedStoresAsync
} from '../../store/searched-stores';
import { Spinner } from '../../components/spinner';
import { Section } from '../../components/section';
import { StoresDisplayboard } from '../../components/stores-displayboard';

function StoresSearch() {
  const { stores, isLoading } = useSelector(selectAll);
  const dispatch = useDispatch();
  const { searchTerm } = useParams();

  useEffect(() => {
    dispatch(loadSearchedStoresAsync(searchTerm));
  }, [searchTerm]);

  const loadingContent = <Spinner fullpage />;

  const loadedContent = <StoresDisplayboard stores={stores} />;

  return (
    <Fragment>
      <Section title='Resultados da busca'>
        {isLoading ? loadingContent : loadedContent}
      </Section>
    </Fragment>
  );
}

export default StoresSearch;
