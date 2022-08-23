import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import {
  loadPaginatedStoresAsync,
  selectStoresState
} from '../../store/stores';
import { selectToken } from '../../store/auth';
import { Section } from '../../components/section';
import { Spinner } from '../../components/spinner';
import { StoreEditionCard } from '../../components/store-edition-card';
import { PaginationController } from '../../components/pagination-controller';
import { DisplayBoard } from './index';

function StoresEdition() {
  const token = useSelector(selectToken);
  const { paginatedStores, pagination, isLoading } =
    useSelector(selectStoresState);
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    const query = { page };

    dispatch(loadPaginatedStoresAsync(token, query));
  }, [page]);

  if (isLoading) return <Spinner fullpage />;

  return (
    <Fragment>
      <Section title='Editar Lojas'>
        <DisplayBoard>
          {paginatedStores.map((store) => (
            <StoreEditionCard key={nanoid()} store={store} />
          ))}
        </DisplayBoard>

        <PaginationController {...pagination} basePath='stores/edition' />
      </Section>
    </Fragment>
  );
}

export default StoresEdition;
