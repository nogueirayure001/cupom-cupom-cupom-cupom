import { Fragment, useContext, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { PaginatedStoresContext } from '../../contexts';
import { useOffsetObserver } from '../../hooks';
import { Section } from '../../components/section';
import { SearchForm, StoresDisplayContainer } from './index';
import { StoresDisplayboard } from '../../components/stores-displayboard';
import { PaginationController } from '../../components/pagination-controller';

function StoresPaginated() {
  const { stores, pagination, changePage } = useContext(PaginatedStoresContext);
  const { page } = useParams();
  const containerRef = useRef();
  const offset = useOffsetObserver(containerRef.current);
  const navigate = useNavigate();

  useEffect(() => {
    changePage(+page);
  }, [page]);

  const submitHandler = (e) => {
    e.preventDefault();

    const children = Array.from(e.target);
    const [inputField] = children.filter((child) => child.nodeName === 'INPUT');

    const searchTerm = inputField.value;

    navigate(`../search/${searchTerm}`);
  };

  return (
    <Fragment>
      <SearchForm
        darkBorder
        type='search'
        fieldLabel='Que loja está procurando?'
        buttonLabel='buscar'
        onSubmit={submitHandler}
      />

      <Section title='Confira todas as lojas disponíveis'>
        <StoresDisplayContainer offset={offset} ref={containerRef}>
          <StoresDisplayboard stores={stores} />
        </StoresDisplayContainer>

        <PaginationController {...pagination} basePathName='stores' />
      </Section>
    </Fragment>
  );
}

export default StoresPaginated;
