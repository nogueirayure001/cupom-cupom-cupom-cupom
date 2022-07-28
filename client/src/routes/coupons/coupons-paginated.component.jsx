import { Fragment, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { PaginatedCouponsContext } from '../../contexts';
import { Section } from '../../components/section';
import { SearchForm } from './index';
import { CouponsDisplayboard } from '../../components/coupons-displayboard';
import { PaginationController } from '../../components/pagination-controller';

function CouponsPaginated() {
  const { coupons, pagination, changePage } = useContext(
    PaginatedCouponsContext
  );

  const navigate = useNavigate();

  const { page } = useParams();

  useEffect(() => {
    changePage(+page);
  }, [page]);

  const submitHandler = (e) => {
    e.preventDefault();

    const children = Array.from(e.target.children);
    const [inputField] = children.filter((child) => child.nodeName === 'INPUT');

    const searchTerm = inputField.value;

    navigate(`../search/${searchTerm}`);
  };

  return (
    <Fragment>
      <SearchForm
        inverted
        type='search'
        fieldLabel='O que está procurando?'
        buttonLabel='buscar'
        onSubmit={submitHandler}
      />

      <Section title='Confira todos os cupons disponíveis'>
        <CouponsDisplayboard coupons={coupons} />

        <PaginationController {...pagination} />
      </Section>
    </Fragment>
  );
}

export default CouponsPaginated;
