import { Fragment, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { updateQuery, selectQuery } from '../../store/searched-coupons';
import {
  SearchForm,
  FiltersSet,
  LegendContainer,
  Legend,
  FilterIcon,
  CheckboxesContainer,
  Checkbox
} from './index';
function CouponsLayout(props) {
  const [showFilters, setShowFilters] = useState(false);
  const { filters, searchTerm } = useSelector(selectQuery);
  const { store, category, keyword } = filters;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const [inputField] = Array.from(e.target).filter(
      (child) => child.type === 'search'
    );

    const searchTerm = inputField.value;

    const relativePath = `search/${searchTerm}`;

    navigate(relativePath);
  };

  const showFiltersHandler = () => {
    setShowFilters(!showFilters);
  };

  const changeHandler = (e) => {
    const { value, checked } = e.target;

    const newQuery = {
      searchTerm,
      filters: { ...filters, [value]: checked }
    };

    dispatch(updateQuery(newQuery));
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
              checked={store}
              onChange={changeHandler}
            />

            <Checkbox
              type='checkbox'
              value='category'
              label='Categoria'
              checked={category}
              onChange={changeHandler}
            />

            <Checkbox
              type='checkbox'
              value='keyword'
              label='Palavra-chave'
              checked={keyword}
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
