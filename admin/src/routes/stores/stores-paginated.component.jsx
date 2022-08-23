import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  loadPaginatedStoresAsync,
  selectStoresState
} from '../../store/stores';
import { selectToken } from '../../store/auth';
import { Section } from '../../components/section';
import { PaginationController } from '../../components/pagination-controller';

import { StoresDisplayContainer } from './index';
import { StoresDisplayboard } from '../../components/stores-displayboard';

function StoresPaginated() {
  const token = useSelector(selectToken);
  const { paginatedStores, pagination, isLoading } =
    useSelector(selectStoresState);
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    const query = { page };

    dispatch(loadPaginatedStoresAsync(token, query));
  }, [page]);

  return (
    <Fragment>
      <Section title='Editar Lojas'>
        <PaginationController {...pagination} basePath='stores' />
      </Section>
    </Fragment>
  );
}

export default StoresPaginated;
