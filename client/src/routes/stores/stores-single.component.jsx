import { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Section } from '../../components/section';
import { SearchForm } from './index';
import { CouponsDisplayboard } from '../../components/coupons-displayboard';
import { httpFetchAPIResource } from '../../utils';

function StoresSingle() {
  const [coupons, setCoupons] = useState([]);
  const { store } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSearchResults = async () => {
      const { data } = await httpFetchAPIResource('/coupons/search', {
        searchTerm: store
      });

      setCoupons(data);
    };

    getSearchResults();
  }, [store]);

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

      <Section title={store}>
        <CouponsDisplayboard coupons={coupons} />
      </Section>
    </Fragment>
  );
}

export default StoresSingle;
