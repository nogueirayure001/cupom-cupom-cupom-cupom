import { Fragment, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { Section } from '../../components/section';
import { SearchForm } from './index';
import { StoresDisplayboard } from '../../components/stores-displayboard';
import { httpFetchAPIResource } from '../../utils';

function StoresSearch() {
  const [stores, setStores] = useState([]);
  const { searchTerm } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getSearchResults = async () => {
      const { data } = await httpFetchAPIResource('/stores/search', {
        searchTerm
      });

      setStores(data);
    };

    getSearchResults();
  }, [searchTerm]);

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

      <Section title='Resultados da busca'>
        <StoresDisplayboard stores={stores} />
      </Section>
    </Fragment>
  );
}

export default StoresSearch;
