import { Fragment, useContext, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import { CouponsSearchFiltersContext } from '../../contexts';
import {
  SearchForm,
  FiltersSet,
  LegendContainer,
  Legend,
  FilterIcon,
  CheckboxesContainer,
  Checkbox
} from './index';

function CouponsLayout() {
  const [showFilters, setShowFilters] = useState(false);
  const { updateFilters } = useContext(CouponsSearchFiltersContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const children = Array.from(e.target);
    const [inputField] = children.filter((child) => child.type === 'search');
    const searchTerm = inputField.value;

    const URL = `../search/${searchTerm}`;

    navigate(URL);
  };

  const showFiltersHandler = () => {
    setShowFilters(!showFilters);
  };

  const changeHandler = (e) => {
    const { value, checked } = e.target;

    updateFilters(value, checked);
  };

  return (
    <Fragment>
      <SearchForm
        darkBorder
        type='search'
        fieldLabel='O que está procurando?'
        buttonLabel='buscar'
        onSubmit={submitHandler}
      >
        <FiltersSet>
          <LegendContainer>
            <Legend onClick={showFiltersHandler}>
              Filtros
              <FilterIcon />
            </Legend>
          </LegendContainer>

          <CheckboxesContainer show={showFilters}>
            <Checkbox
              type='checkbox'
              value='store'
              label='Loja'
              onChange={changeHandler}
            />

            <Checkbox
              type='checkbox'
              value='category'
              label='Categoria'
              onChange={changeHandler}
            />

            <Checkbox
              type='checkbox'
              value='keyword'
              label='Palavra-chave'
              onChange={changeHandler}
            />
          </CheckboxesContainer>
        </FiltersSet>
      </SearchForm>

      <Outlet />
    </Fragment>
  );
}

export default CouponsLayout;
