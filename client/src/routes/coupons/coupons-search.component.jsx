import { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Section } from '../../components/section';
import { SearchForm } from './index';
import { CouponsDisplayboard } from '../../components/coupons-displayboard';
import { httpFetchAPIResource } from '../../utils';

function CouponsSearch() {
  const [coupons, setCoupons] = useState([]);
  const { searchTerm } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSearchResults = async () => {
      const { data } = await httpFetchAPIResource('/coupons/search', {
        searchTerm
      });

      setCoupons(data);
    };

    getSearchResults();
  }, [searchTerm]);

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

      <Section title='Resultados da busca'>
        <CouponsDisplayboard coupons={coupons} />
      </Section>
    </Fragment>
  );
}

export default CouponsSearch;
