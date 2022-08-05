import { Fragment, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectAll,
  loadPaginatedStoresDataAsync
} from '../../store/paginated-stores';
import { useOffsetObserver } from '../../hooks';
import { Section } from '../../components/section';
import { StoresDisplayContainer } from './index';
import { StoresDisplayboard } from '../../components/stores-displayboard';
import { PaginationController } from '../../components/pagination-controller';

function StoresPaginated() {
  const { stores, pagination } = useSelector(selectAll);
  const dispatch = useDispatch();
  const { page } = useParams();
  const containerRef = useRef();
  const offset = useOffsetObserver(containerRef.current);

  useEffect(() => {
    dispatch(loadPaginatedStoresDataAsync(page));
  }, [page]);

  return (
    <Fragment>
      <Section title='Confira todas as lojas disponíveis'>
        <StoresDisplayContainer offset={offset} ref={containerRef}>
          <StoresDisplayboard stores={stores} />
        </StoresDisplayContainer>

        <PaginationController {...pagination} basePath='stores' />
      </Section>
    </Fragment>
  );
}

export default StoresPaginated;
